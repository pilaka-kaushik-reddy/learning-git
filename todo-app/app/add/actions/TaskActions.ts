"use server";

import { ITaskInfo } from "@/app/page";
import { promises as fs } from "fs";
import path from "path";

export const getTask = async () => {
  try {
    const filePath = path.join(process.cwd(), "app/add/actions/taskData.json");

    const fileData = await fs.readFile(filePath, "utf8");

    return JSON.parse(fileData);
  } catch (error) {
    console.error("Failed to read task data:", error);
    throw new Error("Could not fetch tasks.");
  }
};

export const AddTask = async (data: ITaskInfo) => {
  console.log("🚀 ~ AddTask ~ data:", data);
  try {
    const filePath = path.join(process.cwd(), "app/add/actions/taskData.json");
    const prevData = await getTask();
    const payload = JSON.stringify([...prevData, data]);

    await fs.writeFile(filePath, payload, "utf8");
  } catch (error) {
    console.error("Failed to write task data:", error);
    throw new Error("Could not fetch tasks.");
  }
};
export const deleteTask = async (id: string) => {
  try {
    const filePath = path.join(process.cwd(), "app/add/actions/taskData.json");
    const prevData = await getTask();

    const payload = JSON.stringify(
      prevData?.filter((item: ITaskInfo) => item.id !== id),
    );

    await fs.writeFile(filePath, payload, "utf8");
  } catch (error) {
    console.error("Failed to write task data:", error);
    throw new Error("Could not fetch tasks.");
  }
};

export const updateTask = async (id: string, task: string) => {
  try {
    const filePath = path.join(process.cwd(), "app/add/actions/taskData.json");
    const prevData = await getTask();

    const payload = JSON.stringify(
      prevData?.map((item: ITaskInfo) => {
        if (item.id === id) {
          return { id, name: task };
        }
        return item;
      }),
    );

    await fs.writeFile(filePath, payload, "utf8");
  } catch (error) {
    console.error("Failed to write task data:", error);
    throw new Error("Could not fetch tasks.");
  }
};
