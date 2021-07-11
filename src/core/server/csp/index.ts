/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { CspConfig, ICspConfig } from './csp_config';
import { CspConfigType, config } from './config';

export { CspConfig, config };
export type { CspConfigType, ICspConfig };

export const DEFAULT_CSP_RULES = Object.freeze([
  'script-src',
  'unsafe-eval',
  'self',
  'sha256-P5polb1UreUSOe5V/Pv7tc+yeZuJXiOi/3fqhGsU7BE=',
]);
