# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-primary-object > migrated_0012`

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
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 21
      index: 21
      line: 1
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 21
          index: 21
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: AssignmentExpression {
        operator: '='
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 21
            index: 21
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        left: AssignmentIdentifier {
          name: 'x'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 1
              index: 1
              line: 1
            }
            start: Object {
              column: 0
              index: 0
              line: 1
            }
          }
        }
        right: ObjectExpression {
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 21
              index: 21
              line: 1
            }
            start: Object {
              column: 4
              index: 4
              line: 1
            }
          }
          properties: Array [
            ObjectMethod {
              kind: 'get'
              key: StaticPropertyKey {
                value: Identifier {
                  name: 'true'
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 14
                      index: 14
                      line: 1
                    }
                    start: Object {
                      column: 10
                      index: 10
                      line: 1
                    }
                  }
                }
                variance: undefined
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 14
                    index: 14
                    line: 1
                  }
                  start: Object {
                    column: 10
                    index: 10
                    line: 1
                  }
                }
              }
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 19
                  index: 19
                  line: 1
                }
                start: Object {
                  column: 6
                  index: 6
                  line: 1
                }
              }
              body: BlockStatement {
                body: Array []
                directives: Array []
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 19
                    index: 19
                    line: 1
                  }
                  start: Object {
                    column: 17
                    index: 17
                    line: 1
                  }
                }
              }
              head: FunctionHead {
                async: false
                generator: false
                hasHoistedVars: false
                params: Array []
                predicate: undefined
                rest: undefined
                returnType: undefined
                thisType: undefined
                typeParameters: undefined
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 17
                    index: 17
                    line: 1
                  }
                  start: Object {
                    column: 14
                    index: 14
                    line: 1
                  }
                }
              }
            }
          ]
        }
      }
    }
  ]
}
```
