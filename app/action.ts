"use server";

import { revalidatePath } from "next/cache";
import { inMemoryStore, TestObject } from "./store";

export async function createTestObject(name: string, message: string) {
    const newObj: TestObject = { name, message };
    inMemoryStore.push(newObj);
    // Sleep to add some async
    await new Promise((resolve) => setTimeout(resolve, 1000));
    revalidatePath("/", "page");
    revalidatePath("/form", "page");
    return newObj;
}

export async function secondaryAction() {
    // sleep
    await new Promise((resolve) => setTimeout(resolve, 300));
    revalidatePath("/", "page");
    revalidatePath("/form", "page");
    return true;
}