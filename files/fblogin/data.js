﻿$axure.loadCurrentPage({
  "url":"fblogin.html",
  "generationDate":new Date(1397121767989.26),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"dc2007391676492caac7c160391cd5f7",
    "type":"Axure:Page",
    "name":"FbLogin",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"Applied Font",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
      "onLoad":{
        "description":"OnLoad",
        "cases":[{
            "description":"Case 1",
            "isNewIfGroup":false,
            "actions":[{
                "action":"wait",
                "description":"Wait 1000 ms",
                "waitTime":1000},
{
                "action":"setPanelState",
                "description":"Set loading to State1",
                "panelsToStates":[{
                    "panelPath":["aa40c18febc44dcfa043682338e109e7"],
                    "stateInfo":{
                      "setStateType":"diagram",
                      "stateNumber":1,
                      "stateValue":{
                        "exprType":"stringLiteral",
                        "value":"1",
                        "stos":[]},
                      "loop":false,
                      "showWhenSet":false,
                      "options":{
                        "compress":false}}}]},
{
                "action":"wait",
                "description":"Wait 1000 ms",
                "waitTime":1000},
{
                "action":"setPanelState",
                "description":"Set loading to 40%",
                "panelsToStates":[{
                    "panelPath":["aa40c18febc44dcfa043682338e109e7"],
                    "stateInfo":{
                      "setStateType":"diagram",
                      "stateNumber":2,
                      "stateValue":{
                        "exprType":"stringLiteral",
                        "value":"1",
                        "stos":[]},
                      "loop":false,
                      "showWhenSet":false,
                      "options":{
                        "compress":false}}}]},
{
                "action":"wait",
                "description":"Wait 1000 ms",
                "waitTime":1000},
{
                "action":"setPanelState",
                "description":"Set loading to 60%",
                "panelsToStates":[{
                    "panelPath":["aa40c18febc44dcfa043682338e109e7"],
                    "stateInfo":{
                      "setStateType":"diagram",
                      "stateNumber":3,
                      "stateValue":{
                        "exprType":"stringLiteral",
                        "value":"1",
                        "stos":[]},
                      "loop":false,
                      "showWhenSet":false,
                      "options":{
                        "compress":false}}}]},
{
                "action":"wait",
                "description":"Wait 1000 ms",
                "waitTime":1000},
{
                "action":"setPanelState",
                "description":"Set loading to 80%",
                "panelsToStates":[{
                    "panelPath":["aa40c18febc44dcfa043682338e109e7"],
                    "stateInfo":{
                      "setStateType":"diagram",
                      "stateNumber":4,
                      "stateValue":{
                        "exprType":"stringLiteral",
                        "value":"1",
                        "stos":[]},
                      "loop":false,
                      "showWhenSet":false,
                      "options":{
                        "compress":false}}}]},
{
                "action":"linkWindow",
                "description":"Open Homepage-confirmed in Current Window",
                "target":{
                  "targetType":"page",
                  "url":"homepage-confirmed.html",
                  "includeVariables":true},
                "linkType":"current"}]}]}},
    "diagram":{
      "objects":[{
          "id":"5c2fab18c4e042359e73c03d227b598e",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":-15},
            "size":{
              "width":320,
              "height":568}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"9736b9dc6dbc4de3b03fd082a77584ef",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":-15},
                "size":{
                  "width":320,
                  "height":568}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/fblogin/u0.png"}},
{
          "id":"aa40c18febc44dcfa043682338e109e7",
          "label":"loading",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":138,
              "y":307},
            "size":{
              "width":140,
              "height":170}},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"bf4a25415bf7441589ff05c2571910c4",
              "label":"State1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"6f37d1de74e949cc8cb90289f12736f6",
                  "label":"",
                  "parentDynamicPanel":"aa40c18febc44dcfa043682338e109e7",
                  "panelIndex":0,
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "fontName":"'SourceSansPro-Regular', 'Source Sans Pro'",
                    "fontSize":"20px",
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFFFFFF,
                      "opacity":1},
                    "fill":{
                      "fillType":"solid",
                      "color":0xFFFFFF},
                    "location":{
                      "x":0,
                      "y":10},
                    "size":{
                      "width":200,
                      "height":25}},
                  "adaptiveStyles":{
}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}},
{
              "id":"c4ed4fa1886b4d83b943b6ac780b1a3d",
              "label":"40%",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"f56c5fbac26b4cbd94e2c068510f6c47",
                  "label":"",
                  "parentDynamicPanel":"aa40c18febc44dcfa043682338e109e7",
                  "panelIndex":1,
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "fontName":"'SourceSansPro-Regular', 'Source Sans Pro'",
                    "fontSize":"20px",
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFFFFFF,
                      "opacity":1},
                    "fill":{
                      "fillType":"solid",
                      "color":0xFFFFFF},
                    "location":{
                      "x":0,
                      "y":10},
                    "size":{
                      "width":200,
                      "height":25}},
                  "adaptiveStyles":{
}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}},
{
              "id":"799c5f873be74f1db37b559f3d40ad2a",
              "label":"60%",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"5cc2b75027d24855a887a4ab57f6a1ce",
                  "label":"",
                  "parentDynamicPanel":"aa40c18febc44dcfa043682338e109e7",
                  "panelIndex":2,
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "fontName":"'SourceSansPro-Regular', 'Source Sans Pro'",
                    "fontSize":"20px",
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFFFFFF,
                      "opacity":1},
                    "fill":{
                      "fillType":"solid",
                      "color":0xFFFFFF},
                    "location":{
                      "x":0,
                      "y":10},
                    "size":{
                      "width":200,
                      "height":25}},
                  "adaptiveStyles":{
}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}},
{
              "id":"e8a8965795eb48e383a6be54baf5fccd",
              "label":"80%",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"a2b429568132413e86c49c4c93dfc67f",
                  "label":"",
                  "parentDynamicPanel":"aa40c18febc44dcfa043682338e109e7",
                  "panelIndex":3,
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "fontName":"'SourceSansPro-Regular', 'Source Sans Pro'",
                    "fontSize":"20px",
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFFFFFF,
                      "opacity":1},
                    "fill":{
                      "fillType":"solid",
                      "color":0xFFFFFF},
                    "location":{
                      "x":0,
                      "y":10},
                    "size":{
                      "width":200,
                      "height":25}},
                  "adaptiveStyles":{
}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}}]}]}},
  "masters":{
},
  "objectPaths":{
    "5c2fab18c4e042359e73c03d227b598e":{
      "scriptId":"u0"},
    "9736b9dc6dbc4de3b03fd082a77584ef":{
      "scriptId":"u1"},
    "aa40c18febc44dcfa043682338e109e7":{
      "scriptId":"u2"},
    "6f37d1de74e949cc8cb90289f12736f6":{
      "scriptId":"u3"},
    "f56c5fbac26b4cbd94e2c068510f6c47":{
      "scriptId":"u4"},
    "5cc2b75027d24855a887a4ab57f6a1ce":{
      "scriptId":"u5"},
    "a2b429568132413e86c49c4c93dfc67f":{
      "scriptId":"u6"}}});