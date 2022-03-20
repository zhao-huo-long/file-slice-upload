export type EventType = {
  start: () => Promise<void>;
  finish: (payload: { file: File, chunkSize: number, md5: string }) => void;
  progress: (payload: { done: number, all: number, type: 'md5' | 'upload' }) => void;
  'chunk-uploaded': (payload: { chunk: File, index: number, file: File, md5: string }) => void;
  error: (error: unknown) => void;
  cancel: () => void;
}

export type EventKey = keyof EventType
