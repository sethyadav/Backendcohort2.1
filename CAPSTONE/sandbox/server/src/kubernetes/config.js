import * as k8s from '@kubernetes/client-node';

const kc = new K8sApi.Kubernetesclient();
kc.loadFromDefault();

export const k8sCoreV1Api = kc.makeApiClient(k8sApi.CoreV1Api)