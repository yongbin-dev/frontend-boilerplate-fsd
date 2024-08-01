// src/mocks/handlers.js
import { Todo } from "@/5_entities/Todo/model/Todo";
import { http, HttpResponse } from "msw";

let list: Todo[] = [
  {
    id: 1,
    text: "1231",
  },
  {
    id: 2,
    text: "awdawdawd",
  },
  {
    id: 3,
    text: "asdvasdvasdvsadvsd",
  },
];

export const handlers = [
  http.get(`/example`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),

  http.get(`/api/todo`, () => {
    return HttpResponse.json(list);
  }),

  http.get(`/api/todo/:todoId`, ({params}) => {
    return HttpResponse.json(list[Number(params.todoId)]);
  }),

  http.post(`/api/todo`, async ({ request }) => {
    const newPost: any = await request.json();
    const todos: Todo = {
      id: newPost.id,
      text: newPost.text,
    };

    list.push(todos);
    return HttpResponse.json(list, { status: 201 });
  }),

  http.delete(`/api/todo`, () => {
    list.pop();
    return HttpResponse.json(list, { status: 200 });
  }),

  http.delete(`/api/todo/clear`, () => {
    list = [];
    return HttpResponse.json(list, { status: 200 });
  }),
];
