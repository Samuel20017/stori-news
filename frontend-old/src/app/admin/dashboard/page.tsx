"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Card } from "primereact/card";
import { CreateTopicForm, TopicsTable } from "@components/topics";

const queryClient = new QueryClient();

export default function DashBoardCards() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="p-grid p-4">
          <div className="p-col-12 p-md-4">
            <Card
              title="Newsletters Topics"
              className="bg-white rounded-lg shadow-md p-4 text-black"
              style={{ marginBottom: "2em" }}
            >
              <div className="w-full">
                <div className="flex">
                  <div className="w-1/4">
                    <CreateTopicForm />
                  </div>
                  <div className="w-2/4">
                    <TopicsTable />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="p-col-12 p-md-4">
            <Card
              title="Card 2"
              className="bg-white rounded-lg shadow-md p-4"
              style={{ marginBottom: "2em" }}
            >
              Send
            </Card>
          </div>
          <div className="p-col-12 p-md-4">
            <Card
              title="Card 3"
              className="bg-white rounded-lg shadow-md p-4"
              style={{ marginBottom: "2em" }}
            >
              <p>Content</p>
            </Card>
          </div>
          <div className="p-col-12 p-md-4">
            <Card
              title="Card 4"
              className="bg-white rounded-lg shadow-md p-4"
              style={{ marginBottom: "2em" }}
            >
              <p>Content</p>
            </Card>
          </div>
          <div className="p-col-12 p-md-4">
            <Card
              title="Card 5"
              className="bg-white rounded-lg shadow-md p-4"
              style={{ marginBottom: "2em" }}
            >
              <p>Content</p>
            </Card>
          </div>
          <div className="p-col-12 p-md-4">
            <Card
              title="Card 6"
              className="bg-white rounded-lg shadow-md p-4"
              style={{ marginBottom: "2em" }}
            >
              <p>Content</p>
            </Card>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}
