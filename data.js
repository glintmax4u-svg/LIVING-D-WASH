var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-hall",
      "name": "LIVING HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.0053702438522922336,
        "pitch": 0.0018797568267672204,
        "fov": 0.521398562062275
      },
      "linkHotspots": [
        {
          "yaw": -0.21253024658883923,
          "pitch": 0.028360124163341993,
          "rotation": 4.71238898038469,
          "target": "1-dining-area"
        },
        {
          "yaw": -0.04452610428320547,
          "pitch": 0.025386167303897977,
          "rotation": 1.5707963267948966,
          "target": "2-wash-area-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-area",
      "name": "DINING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.041872452650576264,
        "pitch": 0.0018848006313465504,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7660003447114043,
          "pitch": 0.0350504017943738,
          "rotation": 4.71238898038469,
          "target": "0-living-hall"
        },
        {
          "yaw": 1.7452607573692083,
          "pitch": -0.04148502795215592,
          "rotation": 1.5707963267948966,
          "target": "2-wash-area-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wash-area-",
      "name": "WASH AREA ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.016500092998850135,
        "pitch": 0.061825645041238886,
        "fov": 0.9612611730011851
      },
      "linkHotspots": [
        {
          "yaw": 1.5296422944866261,
          "pitch": -0.0003656544778198878,
          "rotation": 0,
          "target": "0-living-hall"
        },
        {
          "yaw": 1.8170071710647733,
          "pitch": 0.05839964454799329,
          "rotation": 1.5707963267948966,
          "target": "1-dining-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
