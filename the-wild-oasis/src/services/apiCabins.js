import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins couldn't be loaded!");
  }

  return data;
}

export async function CreateCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. CREATE CABIN
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.log(error);
    throw new Error("Cabin couldn't be created!");
  }

  // 2. UPLOAD IMAGE
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image, {
      contentType: newCabin.image.type, // Ensures correct content type
    });

  // 3. Delete the cabin if there was an error uploading image
  if (storageError) {
    if (data && data.length > 0) {
      await supabase.from("cabins").delete().eq("id", data[0].id);
    }

    console.error(storageError);
    throw new Error(
      "Cabin image couldn't be uploaed and the cabin was not created!"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin couldn't be deleted!");
  }

  return data;
}
