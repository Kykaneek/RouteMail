import React, { useRef } from 'react';
import { StyleSheet, View, Dimensions, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const MapComponent = () => {
  const webviewRef = useRef(null);

  const handleMessage = (event) => {
    const data = JSON.parse(event.nativeEvent.data);

    fetch('http://localhost:3000/addMapData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        Alert.alert('Błąd', 'Wystąpił błąd podczas zapisywania danych');
      } else {
        Alert.alert('Sukces', 'Dane zostały zapisane pomyślnie');
      }
    })
    .catch(error => {
      console.error(error);
      Alert.alert('Błąd', 'Wystąpił błąd podczas zapisywania danych');
    });
  };

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Intro to MapView - Create a 2D map</title>
    <style>
      html, body, #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }
    </style>
    <link rel="stylesheet" href="https://js.arcgis.com/4.29/esri/themes/light/main.css">
    <script src="https://js.arcgis.com/4.29/"></script>
    <script>
      require([
        "esri/Map",
        "esri/views/MapView",
        "esri/widgets/Search",
        "esri/tasks/RouteTask",
        "esri/tasks/support/RouteParameters",
        "esri/tasks/support/FeatureSet",
        "esri/Graphic",
        "esri/layers/GraphicsLayer"
      ], (Map, MapView, Search, RouteTask, RouteParameters, FeatureSet, Graphic, GraphicsLayer) => {
        
        const map = new Map({
          basemap: "topo-vector"
        });
        
        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 14,
          center: [20.6926, 49.6219]
        });

        const search = new Search({
          view: view,
          locationEnabled: false
        });

        view.ui.add(search, "top-right");

        const routeTask = new RouteTask({
          url: "https://utility.arcgis.com/usrsvcs/servers/<your_route_service_id>/rest/services/World/Route/NAServer/Route_World"
        });

        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        let points = [];

        view.on("click", (event) => {
          if (points.length < 2) {
            const point = {
              type: "point",
              longitude: event.mapPoint.longitude,
              latitude: event.mapPoint.latitude
            };

            const graphic = new Graphic({
              geometry: point,
              symbol: {
                type: "simple-marker",
                color: "blue",
                size: "8px"
              }
            });

            graphicsLayer.add(graphic);
            points.push(point);

            if (points.length === 2) {
              findRoute();
            }

            const data = {
              latitude: {
                degrees: Math.floor(point.latitude),
                minutes: Math.floor((point.latitude % 1) * 60),
                seconds: ((point.latitude % 1) * 60 % 1) * 60,
                direction: point.latitude >= 0 ? 'N' : 'S'
              },
              longitude: {
                degrees: Math.floor(point.longitude),
                minutes: Math.floor((point.longitude % 1) * 60),
                seconds: ((point.longitude % 1) * 60 % 1) * 60,
                direction: point.longitude >= 0 ? 'E' : 'W'
              }
            };

            window.ReactNativeWebView.postMessage(JSON.stringify(data));
          }
        });

        function findRoute() {
          const routeParams = new RouteParameters({
            stops: new FeatureSet({
              features: points.map(point => new Graphic({ geometry: point }))
            }),
            returnDirections: true
          });

          routeTask.solve(routeParams).then((data) => {
            const route = data.routeResults[0].route;
            route.symbol = {
              type: "simple-line",
              color: "blue",
              width: 2
            };

            graphicsLayer.add(route);

            view.goTo({
              target: route.geometry.extent
            });

            points = [];
          }).catch((error) => {
            console.error(error);
          });
        }
      });
    </script>
  </head>
  <body>
    <div id="viewDiv"></div>
  </body>
  </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
        ref={webviewRef}
        onMessage={handleMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapComponent;
