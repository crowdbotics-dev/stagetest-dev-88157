import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_grty_list = createAsyncThunk(
  "grties/api_v1_grty_list",
  async payload => {
    const response = await apiService.api_v1_grty_list(payload)
    return response.data
  }
)
export const api_v1_grty_create = createAsyncThunk(
  "grties/api_v1_grty_create",
  async payload => {
    const response = await apiService.api_v1_grty_create(payload)
    return response.data
  }
)
export const api_v1_grty_retrieve = createAsyncThunk(
  "grties/api_v1_grty_retrieve",
  async payload => {
    const response = await apiService.api_v1_grty_retrieve(payload)
    return response.data
  }
)
export const api_v1_grty_update = createAsyncThunk(
  "grties/api_v1_grty_update",
  async payload => {
    const response = await apiService.api_v1_grty_update(payload)
    return response.data
  }
)
export const api_v1_grty_partial_update = createAsyncThunk(
  "grties/api_v1_grty_partial_update",
  async payload => {
    const response = await apiService.api_v1_grty_partial_update(payload)
    return response.data
  }
)
export const api_v1_grty_destroy = createAsyncThunk(
  "grties/api_v1_grty_destroy",
  async payload => {
    const response = await apiService.api_v1_grty_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const grtiesSlice = createSlice({
  name: "grties",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_grty_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_grty_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_grty_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_grty_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_grty_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_grty_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_grty_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_grty_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_grty_list,
  api_v1_grty_create,
  api_v1_grty_retrieve,
  api_v1_grty_update,
  api_v1_grty_partial_update,
  api_v1_grty_destroy,
  slice: grtiesSlice
}
