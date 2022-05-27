// bucket.js

// Actions
const CREATE = 'bucket/CREATE';
const DELETE = "bucket/DELETE";

const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기", "여행 가기"],
};

// Action Creators
export function createBucket(bucket){
  return {type: CREATE, bucket: bucket};
}

export function deleteBucket(bucket_index){
  console.log("지울 버킷 인덱스", bucket_index);
  return {type: DELETE, bucket_index};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return {list : new_bucket_list};
    }
    case "bucket/DELETE": {
      console.log(state, action)
      return state;
    }
    default:
      return state;
    }
  }
  