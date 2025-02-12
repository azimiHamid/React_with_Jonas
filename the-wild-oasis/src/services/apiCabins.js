import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be loaded!");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  let imagePath = newCabin.image; // Default to the provided image (if any)

  // If a new image is provided, generate a new image path
  if (!hasImagePath && newCabin.image) {
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
      "/",
      ""
    );
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  }

  // 1. Create/Edit cabin
  let query = supabase.from("cabins");

  // A) CREATE: Always insert a new cabin with the image
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  // B) EDIT: Only update fields, keeping the old image if no new one is uploaded
  if (id) {
    const updatedCabinData = { ...newCabin };

    // ✅ Keep the old image if no new image is provided
    if (!imagePath) delete updatedCabinData.image;

    query = query.update(updatedCabinData).eq("id", id).select();
  }

  const { data, error } = await query.single();

  if (error) {
    console.log(error);
    throw new Error("Cabin couldn't be created/edited!");
  }

  // 2. UPLOAD IMAGE only if a new image was provided
  if (hasImagePath) return data;

  if (!hasImagePath && newCabin.image) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imagePath.split("/").pop(), newCabin.image, {
        contentType: newCabin.image.type,
      });

    if (storageError) {
      console.error(storageError);
      throw new Error(
        "Cabin image couldn't be uploaded and the cabin was not updated!"
      );
    }
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
