import { TSheeter, mergeSheets, toPatchableAndMergeable, mergeRulesetsForCode, mediaqFinishAddInCreator, mediaqRulesetPatchGetterCreator, whenUsedRulesetFilter } from 'reactxx-sheeter'

export const test = () => {

  const patchable = toPatchableAndMergeable(root)

  const finishAddIns: TSheeter.FinishAddIns = {
    $mediaq: mediaqFinishAddInCreator()
  }
  const addInRulesetFilters: TSheeter.RulesetPatchGetters = {
    $mediaq: mediaqRulesetPatchGetterCreator(200), // screen width = 200px
    $whenUsed: whenUsedRulesetFilter
  }
  window.isWeb = true
  const mergedWeb = mergeSheets(patchable, [], finishAddIns)
  const codeRootWeb = mergeRulesetsForCode(mergedWeb, addInRulesetFilters, [mergedWeb.root, false as any, mergedWeb.b, null as any])

  window.isWeb = false
  const mergedNative = mergeSheets(patchable, [], finishAddIns)
  const codeRootNative = mergeRulesetsForCode(mergedNative, addInRulesetFilters, [mergedNative.root, false as any, mergedNative.b, null as any])

  debugger
}

//****************************
// INPUT DATA

const root: TSheeter.Sheet = {
  root: {
    a0: 1,
    $web: {
      a1: 1,
      ":active": {
        a2: 1,
        $before: {
          $mediaq: {
            '100-400': {
              a3: 1,
              $whenUsed: {
                b: {
                  a4: 1,
                  $after: {
                    $web: {
                      a5: 1,
                      ":hover": {
                        a6: 1,
                        $mediaq: {
                          '200-300': {
                            a7: 1,
                          }
                        } as TSheeter.Sheet
                      },
                    },
                    ":hover": {
                      $mediaq: {
                        '300-400': {
                          a8: 1,
                        }
                      } as TSheeter.Sheet
                    }
                  },
                },
              } as TSheeter.Sheet,
            },
          } as TSheeter.Sheet,
        },
      },
    },
  },
  b: {}
}

//window['isWeb'] = true

//****************************
// 

const _toPatchableAndMergeable = {
  "root": {
    "a0": 1,
    "a1": 1,
    ":active": {
      "a2": 1
    }
  },
  "b": {},
  "$addInsFinal": {
    "$mediaq": {
    }
  },
  "$addIns": {
    "$mediaq": {
      "$addIns/$whenUsed/$addIns/$mediaq/root/:active/100-200/b/:hover": {
        "300-400": {
          "a8": 1
        },
        "200-300": {
          "a7": 1
        },
        "#path": [
          "$addIns",
          "$whenUsed",
          "$addIns/$mediaq/root/:active/100-200",
          "b",
          ":hover"
        ],
      },
      "root/:active": {
        "100-200": {
          "a3": 1
        },
        "#path": [
          "root",
          ":active"
        ]
      }
    },
    "$whenUsed": {
      "$addIns/$mediaq/root/:active/100-200": {
        "b": {
          "a4": 1,
          ":hover": {
            "a6": 1
          },
          "a5": 1
        },
        "#path": [
          "$addIns",
          "$mediaq",
          "root/:active",
          "100-200"
        ]
      }
    }
  }
}

const inGetPatchLow = {
  "rootPatches": [
    {
      "path": [
        "root",
        ":active"
      ],
      "items": [
        {
          "a3": 1,
          "a4": 1,
          ":hover": {
            "a6": 1,
            "a8": 1,
            "a7": 1
          },
          "a5": 1
        }
      ]
    }
  ],
  "addInPatches": [
    {
      "path": [
        "$addIns",
        "$whenUsed",
        "$addIns/$mediaq/root/:active/100-200",
        "b",
        ":hover"
      ],
      "items": [
        {
          "a8": 1
        },
        {
          "a7": 1
        }
      ]
    },
    {
      "path": [
        "$addIns",
        "$mediaq",
        "root/:active",
        "100-200"
      ],
      "items": [
        {
          "a4": 1,
          ":hover": {
            "a6": 1,
            "a8": 1,
            "a7": 1
          },
          "a5": 1
        }
      ]
    }
  ]
}

const result = {
  "a0": 1,
  "a1": 1,
  ":active": {
    "a2": 1,
    "a3": 1,
    "a4": 1,
    ":hover": {
      "a6": 1,
      "a8": 1,
      "a7": 1
    },
    "a5": 1
  }
}