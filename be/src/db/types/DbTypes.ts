/*
* This file was generated by a tool.
* Rerun sql-ts to regenerate this file.
*/
export interface boardsDb {
  "id"?: number 
  "name": string | null 
}
export interface itemsDb {
  "id"?: number 
  "name": string | null 
  "listId": number | null 
}
export interface listsDb {
  "id"?: number 
  "name": string | null 
  "boardId": number | null 
}
