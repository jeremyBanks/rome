/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Builder from '../../Builder';
import {Tokens, concat, operator, space, word} from '../../tokens';
import {AnyNode, exportNamespaceSpecifier} from '@romejs/js-ast';

export default function ExportNamespaceSpecifier(
  builder: Builder,
  node: AnyNode,
): Tokens {
  node = exportNamespaceSpecifier.assert(node);

  return [
    operator('*'),
    space,
    word('as'),
    space,
    concat(builder.tokenize(node.exported, node)),
  ];
}
