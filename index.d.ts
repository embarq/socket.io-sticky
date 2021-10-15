
export function setupMaster(httpServer: any, opts: { loadBalancingMethod: 'random' | 'round-robin' | 'least-connection' }): void;

export function setupWorker(io: any): void;
