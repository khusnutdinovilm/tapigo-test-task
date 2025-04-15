export interface INoteItem {
  id: number;
  title: string;
}

export interface ITaskItem {
  id: number;
  title: string;
  done: boolean;
  note_id: number;
}
