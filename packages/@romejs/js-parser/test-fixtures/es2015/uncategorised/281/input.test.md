# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 281`

```javascript
Program {
  comments: Array []
  corrupt: false
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 56
      index: 56
      line: 1
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  directives: Array [
    Directive {
      value: 'use strict'
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 13
          index: 13
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
    }
  ]
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'script'
        end: Object {
          column: 48
          index: 48
          line: 1
        }
        start: Object {
          column: 47
          index: 47
          line: 1
        }
      }
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Argument <emphasis>a</emphasis> name clash in strict mode'}
        advice: Array [
          log {
            category: 'info'
            message: 'Defined already here'
          }
          frame {
            location: Object {
              filename: 'input.js'
              end: Object {
                column: 48
                index: 48
                line: 1
              }
              start: Object {
                column: 47
                index: 47
                line: 1
              }
            }
          }
        ]
      }
    }
  ]
  body: Array [
    FunctionDeclaration {
      id: BindingIdentifier {
        name: 'x'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 24
            index: 24
            line: 1
          }
          start: Object {
            column: 23
            index: 23
            line: 1
          }
        }
      }
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 56
          index: 56
          line: 1
        }
        start: Object {
          column: 14
          index: 14
          line: 1
        }
      }
      body: BlockStatement {
        body: Array []
        directives: Array []
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 56
            index: 56
            line: 1
          }
          start: Object {
            column: 54
            index: 54
            line: 1
          }
        }
      }
      head: FunctionHead {
        async: false
        generator: false
        hasHoistedVars: false
        predicate: undefined
        rest: undefined
        returnType: undefined
        thisType: undefined
        typeParameters: undefined
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 54
            index: 54
            line: 1
          }
          start: Object {
            column: 24
            index: 24
            line: 1
          }
        }
        params: Array [
          BindingObjectPattern {
            rest: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 37
                index: 37
                line: 1
              }
              start: Object {
                column: 25
                index: 25
                line: 1
              }
            }
            meta: PatternMeta {
              optional: undefined
              typeAnnotation: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 37
                  index: 37
                  line: 1
                }
                start: Object {
                  column: 25
                  index: 25
                  line: 1
                }
              }
            }
            properties: Array [
              BindingObjectPatternProperty {
                key: StaticPropertyKey {
                  value: Identifier {
                    name: 'b'
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 28
                        index: 28
                        line: 1
                      }
                      start: Object {
                        column: 27
                        index: 27
                        line: 1
                      }
                    }
                  }
                  variance: undefined
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 28
                      index: 28
                      line: 1
                    }
                    start: Object {
                      column: 27
                      index: 27
                      line: 1
                    }
                  }
                }
                value: BindingObjectPattern {
                  rest: undefined
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 35
                      index: 35
                      line: 1
                    }
                    start: Object {
                      column: 30
                      index: 30
                      line: 1
                    }
                  }
                  properties: Array [
                    BindingObjectPatternProperty {
                      key: StaticPropertyKey {
                        value: Identifier {
                          name: 'a'
                          loc: Object {
                            filename: 'input.js'
                            end: Object {
                              column: 33
                              index: 33
                              line: 1
                            }
                            start: Object {
                              column: 32
                              index: 32
                              line: 1
                            }
                          }
                        }
                        variance: undefined
                        loc: Object {
                          filename: 'input.js'
                          end: Object {
                            column: 33
                            index: 33
                            line: 1
                          }
                          start: Object {
                            column: 32
                            index: 32
                            line: 1
                          }
                        }
                      }
                      value: BindingIdentifier {
                        name: 'a'
                        loc: Object {
                          filename: 'input.js'
                          end: Object {
                            column: 33
                            index: 33
                            line: 1
                          }
                          start: Object {
                            column: 32
                            index: 32
                            line: 1
                          }
                        }
                      }
                      loc: Object {
                        filename: 'input.js'
                        end: Object {
                          column: 33
                          index: 33
                          line: 1
                        }
                        start: Object {
                          column: 32
                          index: 32
                          line: 1
                        }
                      }
                    }
                  ]
                }
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 35
                    index: 35
                    line: 1
                  }
                  start: Object {
                    column: 27
                    index: 27
                    line: 1
                  }
                }
              }
            ]
          }
          BindingArrayPattern {
            rest: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 53
                index: 53
                line: 1
              }
              start: Object {
                column: 39
                index: 39
                line: 1
              }
            }
            meta: PatternMeta {
              optional: undefined
              typeAnnotation: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 53
                  index: 53
                  line: 1
                }
                start: Object {
                  column: 39
                  index: 39
                  line: 1
                }
              }
            }
            elements: Array [
              BindingObjectPattern {
                rest: undefined
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 52
                    index: 52
                    line: 1
                  }
                  start: Object {
                    column: 40
                    index: 40
                    line: 1
                  }
                }
                meta: PatternMeta {
                  optional: undefined
                  typeAnnotation: undefined
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 52
                      index: 52
                      line: 1
                    }
                    start: Object {
                      column: 40
                      index: 40
                      line: 1
                    }
                  }
                }
                properties: Array [
                  BindingObjectPatternProperty {
                    key: StaticPropertyKey {
                      value: Identifier {
                        name: 'b'
                        loc: Object {
                          filename: 'input.js'
                          end: Object {
                            column: 43
                            index: 43
                            line: 1
                          }
                          start: Object {
                            column: 42
                            index: 42
                            line: 1
                          }
                        }
                      }
                      variance: undefined
                      loc: Object {
                        filename: 'input.js'
                        end: Object {
                          column: 43
                          index: 43
                          line: 1
                        }
                        start: Object {
                          column: 42
                          index: 42
                          line: 1
                        }
                      }
                    }
                    value: BindingObjectPattern {
                      rest: undefined
                      loc: Object {
                        filename: 'input.js'
                        end: Object {
                          column: 50
                          index: 50
                          line: 1
                        }
                        start: Object {
                          column: 45
                          index: 45
                          line: 1
                        }
                      }
                      properties: Array [
                        BindingObjectPatternProperty {
                          key: StaticPropertyKey {
                            value: Identifier {
                              name: 'a'
                              loc: Object {
                                filename: 'input.js'
                                end: Object {
                                  column: 48
                                  index: 48
                                  line: 1
                                }
                                start: Object {
                                  column: 47
                                  index: 47
                                  line: 1
                                }
                              }
                            }
                            variance: undefined
                            loc: Object {
                              filename: 'input.js'
                              end: Object {
                                column: 48
                                index: 48
                                line: 1
                              }
                              start: Object {
                                column: 47
                                index: 47
                                line: 1
                              }
                            }
                          }
                          value: BindingIdentifier {
                            name: 'a'
                            loc: Object {
                              filename: 'input.js'
                              end: Object {
                                column: 48
                                index: 48
                                line: 1
                              }
                              start: Object {
                                column: 47
                                index: 47
                                line: 1
                              }
                            }
                          }
                          loc: Object {
                            filename: 'input.js'
                            end: Object {
                              column: 48
                              index: 48
                              line: 1
                            }
                            start: Object {
                              column: 47
                              index: 47
                              line: 1
                            }
                          }
                        }
                      ]
                    }
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 50
                        index: 50
                        line: 1
                      }
                      start: Object {
                        column: 42
                        index: 42
                        line: 1
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
```
