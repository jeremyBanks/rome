# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `flow > comment-disabled > 02-type-include`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array [
    'jsx'
    'flow'
  ]
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 69
      line: 8
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    TypeAliasTypeAnnotation {
      id: BindingIdentifier {
        name: 'Foo'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 8
            index: 13
            line: 2
          }
          start: Object {
            column: 5
            index: 10
            line: 2
          }
        }
      }
      typeParameters: undefined
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 2
          index: 65
          line: 6
        }
        start: Object {
          column: 0
          index: 5
          line: 2
        }
      }
      right: FlowObjectTypeAnnotation {
        exact: false
        inexact: undefined
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 1
            index: 64
            line: 6
          }
          start: Object {
            column: 11
            index: 16
            line: 2
          }
        }
        properties: Array [
          FlowObjectTypeProperty {
            kind: 'init'
            key: Identifier {
              name: 'foo'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 5
                  index: 23
                  line: 3
                }
                start: Object {
                  column: 2
                  index: 20
                  line: 3
                }
              }
            }
            value: NumberKeywordTypeAnnotation {
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 13
                  index: 31
                  line: 3
                }
                start: Object {
                  column: 7
                  index: 25
                  line: 3
                }
              }
            }
            optional: false
            proto: false
            static: false
            variance: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 13
                index: 31
                line: 3
              }
              start: Object {
                column: 2
                index: 20
                line: 3
              }
            }
          }
          FlowObjectTypeProperty {
            kind: 'init'
            key: Identifier {
              name: 'bar'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 5
                  index: 38
                  line: 4
                }
                start: Object {
                  column: 2
                  index: 35
                  line: 4
                }
              }
            }
            value: BooleanKeywordTypeAnnotation {
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 14
                  index: 47
                  line: 4
                }
                start: Object {
                  column: 7
                  index: 40
                  line: 4
                }
              }
            }
            optional: false
            proto: false
            static: false
            variance: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 14
                index: 47
                line: 4
              }
              start: Object {
                column: 2
                index: 35
                line: 4
              }
            }
          }
          FlowObjectTypeProperty {
            kind: 'init'
            key: Identifier {
              name: 'baz'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 5
                  index: 54
                  line: 5
                }
                start: Object {
                  column: 2
                  index: 51
                  line: 5
                }
              }
            }
            value: StringKeywordTypeAnnotation {
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 13
                  index: 62
                  line: 5
                }
                start: Object {
                  column: 7
                  index: 56
                  line: 5
                }
              }
            }
            optional: false
            proto: false
            static: false
            variance: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 13
                index: 62
                line: 5
              }
              start: Object {
                column: 2
                index: 51
                line: 5
              }
            }
          }
        ]
      }
    }
  ]
}
```
