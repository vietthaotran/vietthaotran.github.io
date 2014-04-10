﻿$axure.loadCurrentPage({
  "url":"location.html",
  "generationDate":new Date(1397125516684.33),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"1bf9d5aad31d4cf6842dc53ca9ce50d1",
    "type":"Axure:Page",
    "name":"location",
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
},
    "diagram":{
      "objects":[{
          "id":"386433d7348a4c47a80084f4ecfe490a",
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
              "id":"f9331dd58ae54702bb5c6015bbad7c3b",
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
            "normal~":"images/location/u0.png"}},
{
          "id":"d8c5954f4d264f828aa34e60700cf07c",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":59,
              "y":230},
            "size":{
              "width":210,
              "height":40}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open Search Result_current in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"search_result_current.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"b483595acb0241dd82f5e8f5894ec71a",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "size":{
              "width":60,
              "height":50}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open Back in Current Window",
                      "target":{
                        "targetType":"backUrl",
                        "includeVariables":false},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"e3a894621d1b49cebc7e57e0f8c5b5dc",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":272,
              "y":7},
            "size":{
              "width":35,
              "height":35}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"d7cde16df2cb4b17bb8ac28cef69299f",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":272,
                  "y":7},
                "size":{
                  "width":35,
                  "height":35}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/create_new_event/u5.png"}},
{
          "id":"97416fe6bdcc46eb8e8cd7421a7ef5f0",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":272,
              "y":10},
            "size":{
              "width":38,
              "height":32}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open Homepage-confirmed in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"homepage-confirmed.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"8a2eae868142467e8e82b5469847b565",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "fontName":"'SourceSansPro-Regular', 'Source Sans Pro'",
            "fontSize":"18px",
            "horizontalAlignment":"center",
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF87D4E5,
              "opacity":1},
            "location":{
              "x":59,
              "y":293},
            "size":{
              "width":210,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onTextChange":{
              "description":"OnTextChange",
              "cases":[{
                  "description":"Bugis<br> (If text on This equals &quot;bugis&quot; or text on This equals &quot;Bugis&quot; or text on This equals &quot;BUGIS&quot;)",
                  "isNewIfGroup":false,
                  "condition":{
                    "exprType":"binaryOp",
                    "op":"||",
                    "leftExpr":{
                      "exprType":"binaryOp",
                      "op":"==",
                      "leftExpr":{
                        "exprType":"fcall",
                        "functionName":"GetWidgetText",
                        "arguments":[{
                            "exprType":"pathLiteral",
                            "isThis":true,
                            "isFocused":false,
                            "isTarget":false}]},
                      "rightExpr":{
                        "exprType":"stringLiteral",
                        "value":"bugis",
                        "stos":[]}},
                    "rightExpr":{
                      "exprType":"binaryOp",
                      "op":"||",
                      "leftExpr":{
                        "exprType":"binaryOp",
                        "op":"==",
                        "leftExpr":{
                          "exprType":"fcall",
                          "functionName":"GetWidgetText",
                          "arguments":[{
                              "exprType":"pathLiteral",
                              "isThis":true,
                              "isFocused":false,
                              "isTarget":false}]},
                        "rightExpr":{
                          "exprType":"stringLiteral",
                          "value":"Bugis",
                          "stos":[]}},
                      "rightExpr":{
                        "exprType":"binaryOp",
                        "op":"==",
                        "leftExpr":{
                          "exprType":"fcall",
                          "functionName":"GetWidgetText",
                          "arguments":[{
                              "exprType":"pathLiteral",
                              "isThis":true,
                              "isFocused":false,
                              "isTarget":false}]},
                        "rightExpr":{
                          "exprType":"stringLiteral",
                          "value":"BUGIS",
                          "stos":[]}}}},
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open SearchResult_bugis in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"searchresult_bugis.html",
                        "includeVariables":true},
                      "linkType":"current"}]},
{
                  "description":"Orchard<br> (Else If text on This equals &quot;orchard&quot; or text on This equals &quot;Orchard&quot; or text on This equals &quot;ORCHARD&quot;)",
                  "isNewIfGroup":false,
                  "condition":{
                    "exprType":"binaryOp",
                    "op":"||",
                    "leftExpr":{
                      "exprType":"binaryOp",
                      "op":"==",
                      "leftExpr":{
                        "exprType":"fcall",
                        "functionName":"GetWidgetText",
                        "arguments":[{
                            "exprType":"pathLiteral",
                            "isThis":true,
                            "isFocused":false,
                            "isTarget":false}]},
                      "rightExpr":{
                        "exprType":"stringLiteral",
                        "value":"orchard",
                        "stos":[]}},
                    "rightExpr":{
                      "exprType":"binaryOp",
                      "op":"||",
                      "leftExpr":{
                        "exprType":"binaryOp",
                        "op":"==",
                        "leftExpr":{
                          "exprType":"fcall",
                          "functionName":"GetWidgetText",
                          "arguments":[{
                              "exprType":"pathLiteral",
                              "isThis":true,
                              "isFocused":false,
                              "isTarget":false}]},
                        "rightExpr":{
                          "exprType":"stringLiteral",
                          "value":"Orchard",
                          "stos":[]}},
                      "rightExpr":{
                        "exprType":"binaryOp",
                        "op":"==",
                        "leftExpr":{
                          "exprType":"fcall",
                          "functionName":"GetWidgetText",
                          "arguments":[{
                              "exprType":"pathLiteral",
                              "isThis":true,
                              "isFocused":false,
                              "isTarget":false}]},
                        "rightExpr":{
                          "exprType":"stringLiteral",
                          "value":"ORCHARD",
                          "stos":[]}}}},
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open SearchResult_orchard in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"searchresult_orchard.html",
                        "includeVariables":true},
                      "linkType":"current"}]},
{
                  "description":"Case 1<br> (Else If True)",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setPanelState",
                      "description":"Set error to State2",
                      "panelsToStates":[{
                          "panelPath":["5cdd077380de4f909927c712f5b74e6b"],
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
                              "compress":false}}}]}]}]}},
          "placeholderText":"CHOOSE AN AREA"},
{
          "id":"5cdd077380de4f909927c712f5b74e6b",
          "label":"error",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":50,
              "y":340},
            "size":{
              "width":220,
              "height":200}},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"3af0e91ec42b466e87d3b2524441de85",
              "label":"State1",
              "type":"Axure:PanelDiagram",
              "objects":[],
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
              "id":"50a024102f4443f0969113de4376ae08",
              "label":"State2",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"62ce6ea45f864b6391f70c2bd3d6eec7",
                  "label":"",
                  "parentDynamicPanel":"5cdd077380de4f909927c712f5b74e6b",
                  "panelIndex":1,
                  "type":"buttonShape",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "fontName":"'SourceSansPro-Regular', 'Source Sans Pro'",
                    "fontSize":"16px",
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFFFFFF,
                      "opacity":1},
                    "location":{
                      "x":8,
                      "y":15},
                    "size":{
                      "width":195,
                      "height":40}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"786a7ce11b864b5fba8bf78ba257d3c4",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"5cdd077380de4f909927c712f5b74e6b",
                      "panelIndex":1,
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "fontName":"'SourceSansPro-Regular', 'Source Sans Pro'",
                        "fontSize":"16px",
                        "foreGroundFill":{
                          "fillType":"solid",
                          "color":0xFFFFFFFF,
                          "opacity":1},
                        "location":{
                          "x":8,
                          "y":15},
                        "size":{
                          "width":195,
                          "height":40}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"resources/images/transparent.gif"}}],
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
    "386433d7348a4c47a80084f4ecfe490a":{
      "scriptId":"u0"},
    "f9331dd58ae54702bb5c6015bbad7c3b":{
      "scriptId":"u1"},
    "d8c5954f4d264f828aa34e60700cf07c":{
      "scriptId":"u2"},
    "b483595acb0241dd82f5e8f5894ec71a":{
      "scriptId":"u3"},
    "e3a894621d1b49cebc7e57e0f8c5b5dc":{
      "scriptId":"u4"},
    "d7cde16df2cb4b17bb8ac28cef69299f":{
      "scriptId":"u5"},
    "97416fe6bdcc46eb8e8cd7421a7ef5f0":{
      "scriptId":"u6"},
    "8a2eae868142467e8e82b5469847b565":{
      "scriptId":"u7"},
    "5cdd077380de4f909927c712f5b74e6b":{
      "scriptId":"u8"},
    "62ce6ea45f864b6391f70c2bd3d6eec7":{
      "scriptId":"u9"},
    "786a7ce11b864b5fba8bf78ba257d3c4":{
      "scriptId":"u10"}}});