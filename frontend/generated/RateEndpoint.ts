/**
 * This module is generated from RateEndpoint.java
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///Users/artur/workspace/labs/mortgage-calculator/src/main/java/com/example/app/endpoint/RateEndpoint.java}
 * @module RateEndpoint
 */

// @ts-ignore
import client from './connect-client.default';
import Options from './com/example/app/endpoint/Options';
import Rate from './com/example/app/endpoint/Rate';
import Result from './com/example/app/endpoint/Result';

export function apply(
  name: string,
  options: Options
): Promise<Result> {
  return client.call('RateEndpoint', 'apply', {name, options}, {requireCredentials: false});
}

export function getRates(): Promise<Array<Rate>> {
  return client.call('RateEndpoint', 'getRates', undefined, {requireCredentials: false});
}
