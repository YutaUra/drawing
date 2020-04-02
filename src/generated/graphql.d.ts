import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
  timestamptz: any;
};

export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Draw_Picture = {
   __typename?: 'draw_picture';
  id: Scalars['uuid'];
  json_data: Scalars['String'];
  name: Scalars['String'];
  url: Scalars['String'];
  user: Users;
  user_id: Scalars['String'];
};

export type Draw_Picture_Aggregate = {
   __typename?: 'draw_picture_aggregate';
  aggregate?: Maybe<Draw_Picture_Aggregate_Fields>;
  nodes: Array<Draw_Picture>;
};

export type Draw_Picture_Aggregate_Fields = {
   __typename?: 'draw_picture_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Draw_Picture_Max_Fields>;
  min?: Maybe<Draw_Picture_Min_Fields>;
};


export type Draw_Picture_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Draw_Picture_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Draw_Picture_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Draw_Picture_Max_Order_By>;
  min?: Maybe<Draw_Picture_Min_Order_By>;
};

export type Draw_Picture_Arr_Rel_Insert_Input = {
  data: Array<Draw_Picture_Insert_Input>;
  on_conflict?: Maybe<Draw_Picture_On_Conflict>;
};

export type Draw_Picture_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Draw_Picture_Bool_Exp>>>;
  _not?: Maybe<Draw_Picture_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Draw_Picture_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  json_data?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

export enum Draw_Picture_Constraint {
  DrawPicturePkey = 'draw_picture_pkey'
}

export type Draw_Picture_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  json_data?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

export type Draw_Picture_Max_Fields = {
   __typename?: 'draw_picture_max_fields';
  id?: Maybe<Scalars['uuid']>;
  json_data?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Draw_Picture_Max_Order_By = {
  id?: Maybe<Order_By>;
  json_data?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Draw_Picture_Min_Fields = {
   __typename?: 'draw_picture_min_fields';
  id?: Maybe<Scalars['uuid']>;
  json_data?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Draw_Picture_Min_Order_By = {
  id?: Maybe<Order_By>;
  json_data?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Draw_Picture_Mutation_Response = {
   __typename?: 'draw_picture_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Draw_Picture>;
};

export type Draw_Picture_Obj_Rel_Insert_Input = {
  data: Draw_Picture_Insert_Input;
  on_conflict?: Maybe<Draw_Picture_On_Conflict>;
};

export type Draw_Picture_On_Conflict = {
  constraint: Draw_Picture_Constraint;
  update_columns: Array<Draw_Picture_Update_Column>;
  where?: Maybe<Draw_Picture_Bool_Exp>;
};

export type Draw_Picture_Order_By = {
  id?: Maybe<Order_By>;
  json_data?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Draw_Picture_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Draw_Picture_Select_Column {
  Id = 'id',
  JsonData = 'json_data',
  Name = 'name',
  Url = 'url',
  UserId = 'user_id'
}

export type Draw_Picture_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  json_data?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export enum Draw_Picture_Update_Column {
  Id = 'id',
  JsonData = 'json_data',
  Name = 'name',
  Url = 'url',
  UserId = 'user_id'
}

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Kanban = {
   __typename?: 'kanban';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  owner: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  user: Users;
};

export type Kanban_Aggregate = {
   __typename?: 'kanban_aggregate';
  aggregate?: Maybe<Kanban_Aggregate_Fields>;
  nodes: Array<Kanban>;
};

export type Kanban_Aggregate_Fields = {
   __typename?: 'kanban_aggregate_fields';
  avg?: Maybe<Kanban_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Kanban_Max_Fields>;
  min?: Maybe<Kanban_Min_Fields>;
  stddev?: Maybe<Kanban_Stddev_Fields>;
  stddev_pop?: Maybe<Kanban_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kanban_Stddev_Samp_Fields>;
  sum?: Maybe<Kanban_Sum_Fields>;
  var_pop?: Maybe<Kanban_Var_Pop_Fields>;
  var_samp?: Maybe<Kanban_Var_Samp_Fields>;
  variance?: Maybe<Kanban_Variance_Fields>;
};


export type Kanban_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Kanban_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Kanban_Aggregate_Order_By = {
  avg?: Maybe<Kanban_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Kanban_Max_Order_By>;
  min?: Maybe<Kanban_Min_Order_By>;
  stddev?: Maybe<Kanban_Stddev_Order_By>;
  stddev_pop?: Maybe<Kanban_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Kanban_Stddev_Samp_Order_By>;
  sum?: Maybe<Kanban_Sum_Order_By>;
  var_pop?: Maybe<Kanban_Var_Pop_Order_By>;
  var_samp?: Maybe<Kanban_Var_Samp_Order_By>;
  variance?: Maybe<Kanban_Variance_Order_By>;
};

export type Kanban_Arr_Rel_Insert_Input = {
  data: Array<Kanban_Insert_Input>;
  on_conflict?: Maybe<Kanban_On_Conflict>;
};

export type Kanban_Avg_Fields = {
   __typename?: 'kanban_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Kanban_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Kanban_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Kanban_Bool_Exp>>>;
  _not?: Maybe<Kanban_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Kanban_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

export enum Kanban_Constraint {
  KanbanPkey = 'kanban_pkey'
}

export type Kanban_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Kanban_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

export type Kanban_Max_Fields = {
   __typename?: 'kanban_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Kanban_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Kanban_Min_Fields = {
   __typename?: 'kanban_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Kanban_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Kanban_Mutation_Response = {
   __typename?: 'kanban_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Kanban>;
};

export type Kanban_Obj_Rel_Insert_Input = {
  data: Kanban_Insert_Input;
  on_conflict?: Maybe<Kanban_On_Conflict>;
};

export type Kanban_On_Conflict = {
  constraint: Kanban_Constraint;
  update_columns: Array<Kanban_Update_Column>;
  where?: Maybe<Kanban_Bool_Exp>;
};

export type Kanban_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

export type Kanban_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Kanban_Select_Column {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Owner = 'owner',
  UpdatedAt = 'updated_at'
}

export type Kanban_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Kanban_Stddev_Fields = {
   __typename?: 'kanban_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Kanban_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Kanban_Stddev_Pop_Fields = {
   __typename?: 'kanban_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Kanban_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Kanban_Stddev_Samp_Fields = {
   __typename?: 'kanban_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Kanban_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Kanban_Sum_Fields = {
   __typename?: 'kanban_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Kanban_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Kanban_Update_Column {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Owner = 'owner',
  UpdatedAt = 'updated_at'
}

export type Kanban_Var_Pop_Fields = {
   __typename?: 'kanban_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Kanban_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Kanban_Var_Samp_Fields = {
   __typename?: 'kanban_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Kanban_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Kanban_Variance_Fields = {
   __typename?: 'kanban_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Kanban_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Memos = {
   __typename?: 'memos';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  user: Users;
  user_id: Scalars['String'];
};

export type Memos_Aggregate = {
   __typename?: 'memos_aggregate';
  aggregate?: Maybe<Memos_Aggregate_Fields>;
  nodes: Array<Memos>;
};

export type Memos_Aggregate_Fields = {
   __typename?: 'memos_aggregate_fields';
  avg?: Maybe<Memos_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Memos_Max_Fields>;
  min?: Maybe<Memos_Min_Fields>;
  stddev?: Maybe<Memos_Stddev_Fields>;
  stddev_pop?: Maybe<Memos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Memos_Stddev_Samp_Fields>;
  sum?: Maybe<Memos_Sum_Fields>;
  var_pop?: Maybe<Memos_Var_Pop_Fields>;
  var_samp?: Maybe<Memos_Var_Samp_Fields>;
  variance?: Maybe<Memos_Variance_Fields>;
};


export type Memos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Memos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Memos_Aggregate_Order_By = {
  avg?: Maybe<Memos_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Memos_Max_Order_By>;
  min?: Maybe<Memos_Min_Order_By>;
  stddev?: Maybe<Memos_Stddev_Order_By>;
  stddev_pop?: Maybe<Memos_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Memos_Stddev_Samp_Order_By>;
  sum?: Maybe<Memos_Sum_Order_By>;
  var_pop?: Maybe<Memos_Var_Pop_Order_By>;
  var_samp?: Maybe<Memos_Var_Samp_Order_By>;
  variance?: Maybe<Memos_Variance_Order_By>;
};

export type Memos_Arr_Rel_Insert_Input = {
  data: Array<Memos_Insert_Input>;
  on_conflict?: Maybe<Memos_On_Conflict>;
};

export type Memos_Avg_Fields = {
   __typename?: 'memos_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Memos_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Memos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Memos_Bool_Exp>>>;
  _not?: Maybe<Memos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Memos_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

export enum Memos_Constraint {
  MemosPkey = 'memos_pkey'
}

export type Memos_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Memos_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

export type Memos_Max_Fields = {
   __typename?: 'memos_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Memos_Max_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Memos_Min_Fields = {
   __typename?: 'memos_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Memos_Min_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Memos_Mutation_Response = {
   __typename?: 'memos_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Memos>;
};

export type Memos_Obj_Rel_Insert_Input = {
  data: Memos_Insert_Input;
  on_conflict?: Maybe<Memos_On_Conflict>;
};

export type Memos_On_Conflict = {
  constraint: Memos_Constraint;
  update_columns: Array<Memos_Update_Column>;
  where?: Maybe<Memos_Bool_Exp>;
};

export type Memos_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Memos_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Memos_Select_Column {
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  UserId = 'user_id'
}

export type Memos_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Memos_Stddev_Fields = {
   __typename?: 'memos_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Memos_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Memos_Stddev_Pop_Fields = {
   __typename?: 'memos_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Memos_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Memos_Stddev_Samp_Fields = {
   __typename?: 'memos_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Memos_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Memos_Sum_Fields = {
   __typename?: 'memos_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Memos_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Memos_Update_Column {
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  UserId = 'user_id'
}

export type Memos_Var_Pop_Fields = {
   __typename?: 'memos_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Memos_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Memos_Var_Samp_Fields = {
   __typename?: 'memos_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Memos_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Memos_Variance_Fields = {
   __typename?: 'memos_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Memos_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_draw_picture?: Maybe<Draw_Picture_Mutation_Response>;
  delete_draw_picture_by_pk?: Maybe<Draw_Picture>;
  delete_kanban?: Maybe<Kanban_Mutation_Response>;
  delete_kanban_by_pk?: Maybe<Kanban>;
  delete_memos?: Maybe<Memos_Mutation_Response>;
  delete_memos_by_pk?: Maybe<Memos>;
  delete_picture_game?: Maybe<Picture_Game_Mutation_Response>;
  delete_picture_game_by_pk?: Maybe<Picture_Game>;
  delete_picture_game_history?: Maybe<Picture_Game_History_Mutation_Response>;
  delete_picture_game_history_by_pk?: Maybe<Picture_Game_History>;
  delete_users?: Maybe<Users_Mutation_Response>;
  delete_users_by_pk?: Maybe<Users>;
  insert_draw_picture?: Maybe<Draw_Picture_Mutation_Response>;
  insert_draw_picture_one?: Maybe<Draw_Picture>;
  insert_kanban?: Maybe<Kanban_Mutation_Response>;
  insert_kanban_one?: Maybe<Kanban>;
  insert_memos?: Maybe<Memos_Mutation_Response>;
  insert_memos_one?: Maybe<Memos>;
  insert_picture_game?: Maybe<Picture_Game_Mutation_Response>;
  insert_picture_game_history?: Maybe<Picture_Game_History_Mutation_Response>;
  insert_picture_game_history_one?: Maybe<Picture_Game_History>;
  insert_picture_game_one?: Maybe<Picture_Game>;
  insert_users?: Maybe<Users_Mutation_Response>;
  insert_users_one?: Maybe<Users>;
  update_draw_picture?: Maybe<Draw_Picture_Mutation_Response>;
  update_draw_picture_by_pk?: Maybe<Draw_Picture>;
  update_kanban?: Maybe<Kanban_Mutation_Response>;
  update_kanban_by_pk?: Maybe<Kanban>;
  update_memos?: Maybe<Memos_Mutation_Response>;
  update_memos_by_pk?: Maybe<Memos>;
  update_picture_game?: Maybe<Picture_Game_Mutation_Response>;
  update_picture_game_by_pk?: Maybe<Picture_Game>;
  update_picture_game_history?: Maybe<Picture_Game_History_Mutation_Response>;
  update_picture_game_history_by_pk?: Maybe<Picture_Game_History>;
  update_users?: Maybe<Users_Mutation_Response>;
  update_users_by_pk?: Maybe<Users>;
};


export type Mutation_RootDelete_Draw_PictureArgs = {
  where: Draw_Picture_Bool_Exp;
};


export type Mutation_RootDelete_Draw_Picture_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_KanbanArgs = {
  where: Kanban_Bool_Exp;
};


export type Mutation_RootDelete_Kanban_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_MemosArgs = {
  where: Memos_Bool_Exp;
};


export type Mutation_RootDelete_Memos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Picture_GameArgs = {
  where: Picture_Game_Bool_Exp;
};


export type Mutation_RootDelete_Picture_Game_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_Picture_Game_HistoryArgs = {
  where: Picture_Game_History_Bool_Exp;
};


export type Mutation_RootDelete_Picture_Game_History_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


export type Mutation_RootInsert_Draw_PictureArgs = {
  objects: Array<Draw_Picture_Insert_Input>;
  on_conflict?: Maybe<Draw_Picture_On_Conflict>;
};


export type Mutation_RootInsert_Draw_Picture_OneArgs = {
  object: Draw_Picture_Insert_Input;
  on_conflict?: Maybe<Draw_Picture_On_Conflict>;
};


export type Mutation_RootInsert_KanbanArgs = {
  objects: Array<Kanban_Insert_Input>;
  on_conflict?: Maybe<Kanban_On_Conflict>;
};


export type Mutation_RootInsert_Kanban_OneArgs = {
  object: Kanban_Insert_Input;
  on_conflict?: Maybe<Kanban_On_Conflict>;
};


export type Mutation_RootInsert_MemosArgs = {
  objects: Array<Memos_Insert_Input>;
  on_conflict?: Maybe<Memos_On_Conflict>;
};


export type Mutation_RootInsert_Memos_OneArgs = {
  object: Memos_Insert_Input;
  on_conflict?: Maybe<Memos_On_Conflict>;
};


export type Mutation_RootInsert_Picture_GameArgs = {
  objects: Array<Picture_Game_Insert_Input>;
  on_conflict?: Maybe<Picture_Game_On_Conflict>;
};


export type Mutation_RootInsert_Picture_Game_HistoryArgs = {
  objects: Array<Picture_Game_History_Insert_Input>;
  on_conflict?: Maybe<Picture_Game_History_On_Conflict>;
};


export type Mutation_RootInsert_Picture_Game_History_OneArgs = {
  object: Picture_Game_History_Insert_Input;
  on_conflict?: Maybe<Picture_Game_History_On_Conflict>;
};


export type Mutation_RootInsert_Picture_Game_OneArgs = {
  object: Picture_Game_Insert_Input;
  on_conflict?: Maybe<Picture_Game_On_Conflict>;
};


export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootUpdate_Draw_PictureArgs = {
  _set?: Maybe<Draw_Picture_Set_Input>;
  where: Draw_Picture_Bool_Exp;
};


export type Mutation_RootUpdate_Draw_Picture_By_PkArgs = {
  _set?: Maybe<Draw_Picture_Set_Input>;
  pk_columns: Draw_Picture_Pk_Columns_Input;
};


export type Mutation_RootUpdate_KanbanArgs = {
  _inc?: Maybe<Kanban_Inc_Input>;
  _set?: Maybe<Kanban_Set_Input>;
  where: Kanban_Bool_Exp;
};


export type Mutation_RootUpdate_Kanban_By_PkArgs = {
  _inc?: Maybe<Kanban_Inc_Input>;
  _set?: Maybe<Kanban_Set_Input>;
  pk_columns: Kanban_Pk_Columns_Input;
};


export type Mutation_RootUpdate_MemosArgs = {
  _inc?: Maybe<Memos_Inc_Input>;
  _set?: Maybe<Memos_Set_Input>;
  where: Memos_Bool_Exp;
};


export type Mutation_RootUpdate_Memos_By_PkArgs = {
  _inc?: Maybe<Memos_Inc_Input>;
  _set?: Maybe<Memos_Set_Input>;
  pk_columns: Memos_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Picture_GameArgs = {
  _set?: Maybe<Picture_Game_Set_Input>;
  where: Picture_Game_Bool_Exp;
};


export type Mutation_RootUpdate_Picture_Game_By_PkArgs = {
  _set?: Maybe<Picture_Game_Set_Input>;
  pk_columns: Picture_Game_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Picture_Game_HistoryArgs = {
  _set?: Maybe<Picture_Game_History_Set_Input>;
  where: Picture_Game_History_Bool_Exp;
};


export type Mutation_RootUpdate_Picture_Game_History_By_PkArgs = {
  _set?: Maybe<Picture_Game_History_Set_Input>;
  pk_columns: Picture_Game_History_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Picture_Game = {
   __typename?: 'picture_game';
  drawing_user?: Maybe<Scalars['String']>;
  drawing_user_user?: Maybe<Users>;
  id: Scalars['uuid'];
  is_open: Scalars['Boolean'];
  is_start: Scalars['Boolean'];
  name: Scalars['String'];
  owner: Scalars['String'];
  owner_user: Users;
  participant?: Maybe<Scalars['String']>;
  participant_user?: Maybe<Users>;
  pass?: Maybe<Scalars['String']>;
  picture_game_histories: Array<Picture_Game_History>;
  picture_game_histories_aggregate: Picture_Game_History_Aggregate;
  start_word: Scalars['String'];
  use_pass: Scalars['Boolean'];
};


export type Picture_GamePicture_Game_HistoriesArgs = {
  distinct_on?: Maybe<Array<Picture_Game_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picture_Game_History_Order_By>>;
  where?: Maybe<Picture_Game_History_Bool_Exp>;
};


export type Picture_GamePicture_Game_Histories_AggregateArgs = {
  distinct_on?: Maybe<Array<Picture_Game_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picture_Game_History_Order_By>>;
  where?: Maybe<Picture_Game_History_Bool_Exp>;
};

export type Picture_Game_Aggregate = {
   __typename?: 'picture_game_aggregate';
  aggregate?: Maybe<Picture_Game_Aggregate_Fields>;
  nodes: Array<Picture_Game>;
};

export type Picture_Game_Aggregate_Fields = {
   __typename?: 'picture_game_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Picture_Game_Max_Fields>;
  min?: Maybe<Picture_Game_Min_Fields>;
};


export type Picture_Game_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Picture_Game_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Picture_Game_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Picture_Game_Max_Order_By>;
  min?: Maybe<Picture_Game_Min_Order_By>;
};

export type Picture_Game_Arr_Rel_Insert_Input = {
  data: Array<Picture_Game_Insert_Input>;
  on_conflict?: Maybe<Picture_Game_On_Conflict>;
};

export type Picture_Game_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Picture_Game_Bool_Exp>>>;
  _not?: Maybe<Picture_Game_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Picture_Game_Bool_Exp>>>;
  drawing_user?: Maybe<String_Comparison_Exp>;
  drawing_user_user?: Maybe<Users_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_open?: Maybe<Boolean_Comparison_Exp>;
  is_start?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  owner_user?: Maybe<Users_Bool_Exp>;
  participant?: Maybe<String_Comparison_Exp>;
  participant_user?: Maybe<Users_Bool_Exp>;
  pass?: Maybe<String_Comparison_Exp>;
  picture_game_histories?: Maybe<Picture_Game_History_Bool_Exp>;
  start_word?: Maybe<String_Comparison_Exp>;
  use_pass?: Maybe<Boolean_Comparison_Exp>;
};

export enum Picture_Game_Constraint {
  PictureGamePkey = 'picture_game_pkey'
}

export type Picture_Game_History = {
   __typename?: 'picture_game_history';
  game: Picture_Game;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  picture: Draw_Picture;
  picture_id: Scalars['uuid'];
};

export type Picture_Game_History_Aggregate = {
   __typename?: 'picture_game_history_aggregate';
  aggregate?: Maybe<Picture_Game_History_Aggregate_Fields>;
  nodes: Array<Picture_Game_History>;
};

export type Picture_Game_History_Aggregate_Fields = {
   __typename?: 'picture_game_history_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Picture_Game_History_Max_Fields>;
  min?: Maybe<Picture_Game_History_Min_Fields>;
};


export type Picture_Game_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Picture_Game_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Picture_Game_History_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Picture_Game_History_Max_Order_By>;
  min?: Maybe<Picture_Game_History_Min_Order_By>;
};

export type Picture_Game_History_Arr_Rel_Insert_Input = {
  data: Array<Picture_Game_History_Insert_Input>;
  on_conflict?: Maybe<Picture_Game_History_On_Conflict>;
};

export type Picture_Game_History_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Picture_Game_History_Bool_Exp>>>;
  _not?: Maybe<Picture_Game_History_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Picture_Game_History_Bool_Exp>>>;
  game?: Maybe<Picture_Game_Bool_Exp>;
  game_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  picture?: Maybe<Draw_Picture_Bool_Exp>;
  picture_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Picture_Game_History_Constraint {
  PictureGameHistoryPkey = 'picture_game_history_pkey'
}

export type Picture_Game_History_Insert_Input = {
  game?: Maybe<Picture_Game_Obj_Rel_Insert_Input>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  picture?: Maybe<Draw_Picture_Obj_Rel_Insert_Input>;
  picture_id?: Maybe<Scalars['uuid']>;
};

export type Picture_Game_History_Max_Fields = {
   __typename?: 'picture_game_history_max_fields';
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  picture_id?: Maybe<Scalars['uuid']>;
};

export type Picture_Game_History_Max_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  picture_id?: Maybe<Order_By>;
};

export type Picture_Game_History_Min_Fields = {
   __typename?: 'picture_game_history_min_fields';
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  picture_id?: Maybe<Scalars['uuid']>;
};

export type Picture_Game_History_Min_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  picture_id?: Maybe<Order_By>;
};

export type Picture_Game_History_Mutation_Response = {
   __typename?: 'picture_game_history_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Picture_Game_History>;
};

export type Picture_Game_History_Obj_Rel_Insert_Input = {
  data: Picture_Game_History_Insert_Input;
  on_conflict?: Maybe<Picture_Game_History_On_Conflict>;
};

export type Picture_Game_History_On_Conflict = {
  constraint: Picture_Game_History_Constraint;
  update_columns: Array<Picture_Game_History_Update_Column>;
  where?: Maybe<Picture_Game_History_Bool_Exp>;
};

export type Picture_Game_History_Order_By = {
  game?: Maybe<Picture_Game_Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  picture?: Maybe<Draw_Picture_Order_By>;
  picture_id?: Maybe<Order_By>;
};

export type Picture_Game_History_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Picture_Game_History_Select_Column {
  GameId = 'game_id',
  Id = 'id',
  PictureId = 'picture_id'
}

export type Picture_Game_History_Set_Input = {
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  picture_id?: Maybe<Scalars['uuid']>;
};

export enum Picture_Game_History_Update_Column {
  GameId = 'game_id',
  Id = 'id',
  PictureId = 'picture_id'
}

export type Picture_Game_Insert_Input = {
  drawing_user?: Maybe<Scalars['String']>;
  drawing_user_user?: Maybe<Users_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  is_open?: Maybe<Scalars['Boolean']>;
  is_start?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  owner_user?: Maybe<Users_Obj_Rel_Insert_Input>;
  participant?: Maybe<Scalars['String']>;
  participant_user?: Maybe<Users_Obj_Rel_Insert_Input>;
  pass?: Maybe<Scalars['String']>;
  picture_game_histories?: Maybe<Picture_Game_History_Arr_Rel_Insert_Input>;
  start_word?: Maybe<Scalars['String']>;
  use_pass?: Maybe<Scalars['Boolean']>;
};

export type Picture_Game_Max_Fields = {
   __typename?: 'picture_game_max_fields';
  drawing_user?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  participant?: Maybe<Scalars['String']>;
  pass?: Maybe<Scalars['String']>;
  start_word?: Maybe<Scalars['String']>;
};

export type Picture_Game_Max_Order_By = {
  drawing_user?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  participant?: Maybe<Order_By>;
  pass?: Maybe<Order_By>;
  start_word?: Maybe<Order_By>;
};

export type Picture_Game_Min_Fields = {
   __typename?: 'picture_game_min_fields';
  drawing_user?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  participant?: Maybe<Scalars['String']>;
  pass?: Maybe<Scalars['String']>;
  start_word?: Maybe<Scalars['String']>;
};

export type Picture_Game_Min_Order_By = {
  drawing_user?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  participant?: Maybe<Order_By>;
  pass?: Maybe<Order_By>;
  start_word?: Maybe<Order_By>;
};

export type Picture_Game_Mutation_Response = {
   __typename?: 'picture_game_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Picture_Game>;
};

export type Picture_Game_Obj_Rel_Insert_Input = {
  data: Picture_Game_Insert_Input;
  on_conflict?: Maybe<Picture_Game_On_Conflict>;
};

export type Picture_Game_On_Conflict = {
  constraint: Picture_Game_Constraint;
  update_columns: Array<Picture_Game_Update_Column>;
  where?: Maybe<Picture_Game_Bool_Exp>;
};

export type Picture_Game_Order_By = {
  drawing_user?: Maybe<Order_By>;
  drawing_user_user?: Maybe<Users_Order_By>;
  id?: Maybe<Order_By>;
  is_open?: Maybe<Order_By>;
  is_start?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  owner_user?: Maybe<Users_Order_By>;
  participant?: Maybe<Order_By>;
  participant_user?: Maybe<Users_Order_By>;
  pass?: Maybe<Order_By>;
  picture_game_histories_aggregate?: Maybe<Picture_Game_History_Aggregate_Order_By>;
  start_word?: Maybe<Order_By>;
  use_pass?: Maybe<Order_By>;
};

export type Picture_Game_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Picture_Game_Select_Column {
  DrawingUser = 'drawing_user',
  Id = 'id',
  IsOpen = 'is_open',
  IsStart = 'is_start',
  Name = 'name',
  Owner = 'owner',
  Participant = 'participant',
  Pass = 'pass',
  StartWord = 'start_word',
  UsePass = 'use_pass'
}

export type Picture_Game_Set_Input = {
  drawing_user?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_open?: Maybe<Scalars['Boolean']>;
  is_start?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  participant?: Maybe<Scalars['String']>;
  pass?: Maybe<Scalars['String']>;
  start_word?: Maybe<Scalars['String']>;
  use_pass?: Maybe<Scalars['Boolean']>;
};

export enum Picture_Game_Update_Column {
  DrawingUser = 'drawing_user',
  Id = 'id',
  IsOpen = 'is_open',
  IsStart = 'is_start',
  Name = 'name',
  Owner = 'owner',
  Participant = 'participant',
  Pass = 'pass',
  StartWord = 'start_word',
  UsePass = 'use_pass'
}

export type Query_Root = {
   __typename?: 'query_root';
  draw_picture: Array<Draw_Picture>;
  draw_picture_aggregate: Draw_Picture_Aggregate;
  draw_picture_by_pk?: Maybe<Draw_Picture>;
  kanban: Array<Kanban>;
  kanban_aggregate: Kanban_Aggregate;
  kanban_by_pk?: Maybe<Kanban>;
  memos: Array<Memos>;
  memos_aggregate: Memos_Aggregate;
  memos_by_pk?: Maybe<Memos>;
  picture_game: Array<Picture_Game>;
  picture_game_aggregate: Picture_Game_Aggregate;
  picture_game_by_pk?: Maybe<Picture_Game>;
  picture_game_history: Array<Picture_Game_History>;
  picture_game_history_aggregate: Picture_Game_History_Aggregate;
  picture_game_history_by_pk?: Maybe<Picture_Game_History>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};


export type Query_RootDraw_PictureArgs = {
  distinct_on?: Maybe<Array<Draw_Picture_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draw_Picture_Order_By>>;
  where?: Maybe<Draw_Picture_Bool_Exp>;
};


export type Query_RootDraw_Picture_AggregateArgs = {
  distinct_on?: Maybe<Array<Draw_Picture_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draw_Picture_Order_By>>;
  where?: Maybe<Draw_Picture_Bool_Exp>;
};


export type Query_RootDraw_Picture_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootKanbanArgs = {
  distinct_on?: Maybe<Array<Kanban_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kanban_Order_By>>;
  where?: Maybe<Kanban_Bool_Exp>;
};


export type Query_RootKanban_AggregateArgs = {
  distinct_on?: Maybe<Array<Kanban_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kanban_Order_By>>;
  where?: Maybe<Kanban_Bool_Exp>;
};


export type Query_RootKanban_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMemosArgs = {
  distinct_on?: Maybe<Array<Memos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Memos_Order_By>>;
  where?: Maybe<Memos_Bool_Exp>;
};


export type Query_RootMemos_AggregateArgs = {
  distinct_on?: Maybe<Array<Memos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Memos_Order_By>>;
  where?: Maybe<Memos_Bool_Exp>;
};


export type Query_RootMemos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPicture_GameArgs = {
  distinct_on?: Maybe<Array<Picture_Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picture_Game_Order_By>>;
  where?: Maybe<Picture_Game_Bool_Exp>;
};


export type Query_RootPicture_Game_AggregateArgs = {
  distinct_on?: Maybe<Array<Picture_Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picture_Game_Order_By>>;
  where?: Maybe<Picture_Game_Bool_Exp>;
};


export type Query_RootPicture_Game_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPicture_Game_HistoryArgs = {
  distinct_on?: Maybe<Array<Picture_Game_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picture_Game_History_Order_By>>;
  where?: Maybe<Picture_Game_History_Bool_Exp>;
};


export type Query_RootPicture_Game_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Picture_Game_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picture_Game_History_Order_By>>;
  where?: Maybe<Picture_Game_History_Bool_Exp>;
};


export type Query_RootPicture_Game_History_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
   __typename?: 'subscription_root';
  draw_picture: Array<Draw_Picture>;
  draw_picture_aggregate: Draw_Picture_Aggregate;
  draw_picture_by_pk?: Maybe<Draw_Picture>;
  kanban: Array<Kanban>;
  kanban_aggregate: Kanban_Aggregate;
  kanban_by_pk?: Maybe<Kanban>;
  memos: Array<Memos>;
  memos_aggregate: Memos_Aggregate;
  memos_by_pk?: Maybe<Memos>;
  picture_game: Array<Picture_Game>;
  picture_game_aggregate: Picture_Game_Aggregate;
  picture_game_by_pk?: Maybe<Picture_Game>;
  picture_game_history: Array<Picture_Game_History>;
  picture_game_history_aggregate: Picture_Game_History_Aggregate;
  picture_game_history_by_pk?: Maybe<Picture_Game_History>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootDraw_PictureArgs = {
  distinct_on?: Maybe<Array<Draw_Picture_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draw_Picture_Order_By>>;
  where?: Maybe<Draw_Picture_Bool_Exp>;
};


export type Subscription_RootDraw_Picture_AggregateArgs = {
  distinct_on?: Maybe<Array<Draw_Picture_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Draw_Picture_Order_By>>;
  where?: Maybe<Draw_Picture_Bool_Exp>;
};


export type Subscription_RootDraw_Picture_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootKanbanArgs = {
  distinct_on?: Maybe<Array<Kanban_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kanban_Order_By>>;
  where?: Maybe<Kanban_Bool_Exp>;
};


export type Subscription_RootKanban_AggregateArgs = {
  distinct_on?: Maybe<Array<Kanban_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kanban_Order_By>>;
  where?: Maybe<Kanban_Bool_Exp>;
};


export type Subscription_RootKanban_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMemosArgs = {
  distinct_on?: Maybe<Array<Memos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Memos_Order_By>>;
  where?: Maybe<Memos_Bool_Exp>;
};


export type Subscription_RootMemos_AggregateArgs = {
  distinct_on?: Maybe<Array<Memos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Memos_Order_By>>;
  where?: Maybe<Memos_Bool_Exp>;
};


export type Subscription_RootMemos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPicture_GameArgs = {
  distinct_on?: Maybe<Array<Picture_Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picture_Game_Order_By>>;
  where?: Maybe<Picture_Game_Bool_Exp>;
};


export type Subscription_RootPicture_Game_AggregateArgs = {
  distinct_on?: Maybe<Array<Picture_Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picture_Game_Order_By>>;
  where?: Maybe<Picture_Game_Bool_Exp>;
};


export type Subscription_RootPicture_Game_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPicture_Game_HistoryArgs = {
  distinct_on?: Maybe<Array<Picture_Game_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picture_Game_History_Order_By>>;
  where?: Maybe<Picture_Game_History_Bool_Exp>;
};


export type Subscription_RootPicture_Game_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Picture_Game_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picture_Game_History_Order_By>>;
  where?: Maybe<Picture_Game_History_Bool_Exp>;
};


export type Subscription_RootPicture_Game_History_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Users = {
   __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  phone_number?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
};

export type Users_Aggregate = {
   __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone_number?: Maybe<String_Comparison_Exp>;
  photo_url?: Maybe<String_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
};

export enum Users_Constraint {
  UsersPkey = 'users_pkey'
}

export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
};

export type Users_Max_Fields = {
   __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
};

export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
};

export type Users_Min_Fields = {
   __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
};

export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
};

export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Users>;
};

export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
};

export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

export enum Users_Select_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  PhoneNumber = 'phone_number',
  PhotoUrl = 'photo_url',
  ProviderId = 'provider_id'
}

export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
};

export enum Users_Update_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  PhoneNumber = 'phone_number',
  PhotoUrl = 'photo_url',
  ProviderId = 'provider_id'
}


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};


