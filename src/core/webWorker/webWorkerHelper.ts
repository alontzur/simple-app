/// <reference lib="webworker" />
declare const self: DedicatedWorkerGlobalScope;

export const add = (a: number, b: number) => a + b;

export async function executeCallback(callback: Function) {
  callback('A string from a worker');
}