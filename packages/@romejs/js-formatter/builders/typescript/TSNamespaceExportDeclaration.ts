/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AnyNode,
  TSNamespaceExportDeclaration,
  tsNamespaceExportDeclaration,
} from '@romejs/js-ast';
import {Builder} from '@romejs/js-formatter';
import {Tokens, space, word} from '../../tokens';

export default function TSNamespaceExportDeclaration(
  builder: Builder,
  node: AnyNode,
): Tokens {
  node = tsNamespaceExportDeclaration.assert(node);

  return [
    word('export'),
    space,
    word('as'),
    space,
    word('namespace'),
    space,
    ...builder.tokenize(node.id, node),
  ];
}
