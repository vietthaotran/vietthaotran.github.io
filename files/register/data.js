﻿$axure.loadCurrentPage({
  "url":"register.html",
  "generationDate":new Date(1397114024712.21),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"6f3697d552c44228be3767647623f244",
    "type":"Axure:Page",
    "name":"REGISTER",
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
          "id":"1ab6ca86502841f9874ec7facf87d69d",
          "label":"errorMsg",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":10,
              "y":224},
            "size":{
              "width":300,
              "height":110}},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"cfba9f595b8142e59ac77c96d39204aa",
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
              "id":"c933fff7c7b24b96aad997d69640889c",
              "label":"pwerror",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"689d0c20889d46d6b54ff246d1aa11bc",
                  "label":"",
                  "parentDynamicPanel":"1ab6ca86502841f9874ec7facf87d69d",
                  "panelIndex":1,
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":300,
                      "height":100}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"952c6c385370468780a68b7d429c0e96",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"1ab6ca86502841f9874ec7facf87d69d",
                      "panelIndex":1,
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":300,
                          "height":100}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/register/u1.png"}},
{
                  "id":"6dfb66d78c0047c5adab4dc326ededcb",
                  "label":"",
                  "parentDynamicPanel":"1ab6ca86502841f9874ec7facf87d69d",
                  "panelIndex":1,
                  "type":"imageMapRegion",
                  "styleType":"imageMapRegion",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":250,
                      "y":10},
                    "size":{
                      "width":40,
                      "height":30}},
                  "adaptiveStyles":{
},
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"Case 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"setPanelState",
                              "description":"Set errorMsg to State1",
                              "panelsToStates":[{
                                  "panelPath":["1ab6ca86502841f9874ec7facf87d69d"],
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
                              "action":"setPanelOrder",
                              "description":"Send errorMsg to Back",
                              "panelPaths":[{
                                  "panelPath":["1ab6ca86502841f9874ec7facf87d69d"],
                                  "setOrderInfo":{
                                    "bringToFront":false}}]}]}]}},
                  "tabbable":true}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}}]},
{
          "id":"33466f0b6ec74f70afe8ac1b3877f97d",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":-10},
            "size":{
              "width":320,
              "height":568}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f9976868e5e54764b06b9177e0bc00db",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":-10},
                "size":{
                  "width":320,
                  "height":568}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/register/u4.png"}},
{
          "id":"b8b62b3cadb44419a859be33160aaa58",
          "label":"FULLNAME",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "fontName":"'SourceSansPro-Light', 'Source Sans Pro ExtraLight', 'Source Sans Pro'",
            "fontSize":"16px",
            "fontWeight":"200",
            "location":{
              "x":20,
              "y":192},
            "size":{
              "width":280,
              "height":25}},
          "adaptiveStyles":{
},
          "placeholderText":"FULL NAME"},
{
          "id":"cc47f61ba2664215a4444564ded4b9d8",
          "label":"USERNAME",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "fontName":"'SourceSansPro-Light', 'Source Sans Pro ExtraLight', 'Source Sans Pro'",
            "fontSize":"16px",
            "fontWeight":"200",
            "location":{
              "x":20,
              "y":235},
            "size":{
              "width":280,
              "height":25}},
          "adaptiveStyles":{
},
          "placeholderText":"USERNAME"},
{
          "id":"91c9e12018984a7f8267a16d129bd452",
          "label":"PASSWORD",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "fontName":"'SourceSansPro-Light', 'Source Sans Pro ExtraLight', 'Source Sans Pro'",
            "fontSize":"16px",
            "fontWeight":"200",
            "location":{
              "x":20,
              "y":293},
            "size":{
              "width":280,
              "height":25}},
          "adaptiveStyles":{
},
          "placeholderText":"PASSWORD"},
{
          "id":"ddb14dbe872b4a1babedb8cfe71f9313",
          "label":"CONFIRMED_PASSWORD",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "fontName":"'SourceSansPro-Light', 'Source Sans Pro ExtraLight', 'Source Sans Pro'",
            "fontSize":"16px",
            "fontWeight":"200",
            "location":{
              "x":20,
              "y":343},
            "size":{
              "width":280,
              "height":25}},
          "adaptiveStyles":{
},
          "placeholderText":"CONFIRM PASSWORD"},
{
          "id":"9c87df8cb744401fb057d2325c0bf3ed",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":10,
              "y":392},
            "size":{
              "width":300,
              "height":50}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"If password matches<br> (If text on PASSWORD equals text on CONFIRMED_PASSWORD)",
                  "isNewIfGroup":false,
                  "condition":{
                    "exprType":"binaryOp",
                    "op":"==",
                    "leftExpr":{
                      "exprType":"fcall",
                      "functionName":"GetWidgetText",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":false,
                          "isFocused":false,
                          "isTarget":false,
                          "value":["91c9e12018984a7f8267a16d129bd452"]}]},
                    "rightExpr":{
                      "exprType":"fcall",
                      "functionName":"GetWidgetText",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":false,
                          "isFocused":false,
                          "isTarget":false,
                          "value":["ddb14dbe872b4a1babedb8cfe71f9313"]}]}},
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open LIKES in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"likes.html",
                        "includeVariables":true},
                      "linkType":"current"}]},
{
                  "description":"if not<br> (Else If True)",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setPanelOrder",
                      "description":"Bring errorMsg to Front ",
                      "panelPaths":[{
                          "panelPath":["1ab6ca86502841f9874ec7facf87d69d"],
                          "setOrderInfo":{
                            "bringToFront":true}}]},
{
                      "action":"setPanelState",
                      "description":"Set errorMsg to pwerror",
                      "panelsToStates":[{
                          "panelPath":["1ab6ca86502841f9874ec7facf87d69d"],
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
          "tabbable":true},
{
          "id":"168c43a38c0743a7ab994f36ad5668be",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":0,
              "y":7},
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
          "tabbable":true}]}},
  "masters":{
},
  "objectPaths":{
    "1ab6ca86502841f9874ec7facf87d69d":{
      "scriptId":"u0"},
    "689d0c20889d46d6b54ff246d1aa11bc":{
      "scriptId":"u1"},
    "952c6c385370468780a68b7d429c0e96":{
      "scriptId":"u2"},
    "6dfb66d78c0047c5adab4dc326ededcb":{
      "scriptId":"u3"},
    "33466f0b6ec74f70afe8ac1b3877f97d":{
      "scriptId":"u4"},
    "f9976868e5e54764b06b9177e0bc00db":{
      "scriptId":"u5"},
    "b8b62b3cadb44419a859be33160aaa58":{
      "scriptId":"u6"},
    "cc47f61ba2664215a4444564ded4b9d8":{
      "scriptId":"u7"},
    "91c9e12018984a7f8267a16d129bd452":{
      "scriptId":"u8"},
    "ddb14dbe872b4a1babedb8cfe71f9313":{
      "scriptId":"u9"},
    "9c87df8cb744401fb057d2325c0bf3ed":{
      "scriptId":"u10"},
    "168c43a38c0743a7ab994f36ad5668be":{
      "scriptId":"u11"}}});