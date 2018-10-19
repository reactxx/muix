import { TVariants } from "reactxx-typings";
import { atomizeSheet, atomizeRuleset, toClassNamesWithQuery } from "reactxx-sheeter";
import { initPlatform, Shape, ts } from "reactxx-tests";
import { sheetSwitch_registerVariantHandler } from "../index";

sheetSwitch_registerVariantHandler();

export const createSheet = () =>
  (ts.sheet = {
    root: (ts.view = {
      $switch: {
        isOpened: {
          backgroundColor: "red",
          $switch: {
            isOpened: {
              borderColor: "cyan"
            }
          }
        },
        isClosed: [{
          backgroundColor: "blue"
        }, atomizeRuleset({
          margin: 11,
        }), toClassNamesWithQuery(null, {
          padding: 11,
        })]
      },
      $web: (ts.web = {
        ":hover": {
          $switch: {
            isClosed: [
              {
                backgroundColor: "green"
              }
            ]
          }
        }
      }),
      $native: (ts.nativeView = {
        $switch: {
          isOpened: {
            backgroundColor: "brown"
          }
        }
      })
    }),
    label: {},
    webOnly: {
      $web: {
        ":hover": {
          $switch: {
            isOpened: {
              backgroundColor: "yellow"
            }
          }
        }
      }
    },
    nativeOnly: {}
  });
export const query = (opened: boolean) =>
  ({
    $switch: {
      isOpened: opened,
      isClosed: !opened
    }
  } as TVariants.Query<Shape>);
/*
describe("SWITCH define sheet", () => {
  it("NATIVE", () => {
    initPlatform(false);
    const sheet = atomizeSheet<Shape>(createSheet());
`
##########################################
##########################################
#
#  NATIVE
#
##########################################
##########################################
`    
    expect(sheet).toMatchInlineSnapshot();
  });
  it("WEB", () => {
    initPlatform(true);
    const sheet = atomizeSheet<Shape>(createSheet());
`
##########################################
##########################################
#
#  WEB
#
##########################################
##########################################
`    
    expect(sheet).toMatchInlineSnapshot();
  });
});
*/

describe("SWITCH define sheet", () => {
  it("NATIVE", () => {
    initPlatform(false);
    const sheet = atomizeSheet<Shape>(createSheet());
    `
##########################################
##########################################
#
#  NATIVE
#
##########################################
##########################################
`;
    expect(sheet).toMatchInlineSnapshot(`
Object {
  "root": Object {
    "list": Array [
      Object {
        "atomicArray": Array [
          "backgroundColor: red /*root/$switch.isOpened*/",
        ],
        "conditions": Array [
          Object {
            "case": "isOpened",
            "type": "$switch",
          },
        ],
      },
      Object {
        "atomicArray": Array [
          "borderColor: cyan /*root/$switch.isOpened/$switch.isOpened*/",
        ],
        "conditions": Array [
          Object {
            "case": "isOpened",
            "type": "$switch",
          },
          Object {
            "case": "isOpened",
            "type": "$switch",
          },
        ],
      },
      Object {
        "atomicArray": Array [
          "backgroundColor: blue /*root/$switch.isClosed*/",
        ],
        "conditions": Array [
          Object {
            "case": "isClosed",
            "type": "$switch",
          },
        ],
      },
      Object {
        "atomicArray": Array [
          "backgroundColor: brown /*root/$native/$switch.isOpened*/",
        ],
        "conditions": Array [
          Object {
            "case": "isOpened",
            "type": "$switch",
          },
        ],
      },
    ],
    "name": "root",
    "~": "c",
  },
}
`);
  });
  it("WEB", () => {
    initPlatform(true);
    const sheet = atomizeSheet<Shape>(createSheet());
    `
##########################################
##########################################
#
#  WEB
#
##########################################
##########################################
`;
    expect(sheet).toMatchInlineSnapshot(`
Object {
  "root": Object {
    "list": Array [
      Object {
        "atomicArray": Array [
          ".a { background-color:red /*root/$switch.isOpened*/ }",
        ],
        "conditions": Array [
          Object {
            "case": "isOpened",
            "type": "$switch",
          },
        ],
      },
      Object {
        "atomicArray": Array [
          ".b { border-color:cyan /*root/$switch.isOpened/$switch.isOpened*/ }",
        ],
        "conditions": Array [
          Object {
            "case": "isOpened",
            "type": "$switch",
          },
          Object {
            "case": "isOpened",
            "type": "$switch",
          },
        ],
      },
      Object {
        "atomicArray": Array [
          ".c { background-color:blue /*root/$switch.isClosed*/ }",
        ],
        "conditions": Array [
          Object {
            "case": "isClosed",
            "type": "$switch",
          },
        ],
      },
      Object {
        "atomicArray": Array [
          null,
        ],
      },
      Object {
        "atomicArray": Array [
          ".d:hover { background-color:green /*root/$web/:hover/$switch.isClosed[0]*/ }",
        ],
        "conditions": Array [
          Object {
            "case": "isClosed",
            "type": "$switch",
          },
        ],
      },
    ],
    "name": "root",
    "~": "c",
  },
  "webOnly": Object {
    "list": Array [
      Object {
        "atomicArray": Array [
          null,
        ],
      },
      Object {
        "atomicArray": Array [
          ".e:hover { background-color:yellow /*webOnly/$web/:hover/$switch.isOpened*/ }",
        ],
        "conditions": Array [
          Object {
            "case": "isOpened",
            "type": "$switch",
          },
        ],
      },
    ],
    "name": "webOnly",
    "~": "c",
  },
}
`);
  });
});