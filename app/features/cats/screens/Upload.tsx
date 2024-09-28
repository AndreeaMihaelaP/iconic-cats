import React, { useContext, useEffect, useState } from "react";
import { Button, Image, Pressable, Text, View } from "react-native";

import * as ImagePicker from "expo-image-picker";

import { CatsContextType, CatsContext } from "~services/cats/cats.context";
import { MaterialIcons } from "@expo/vector-icons";

import { catsListStyles } from "./CatsList.styles";

import { uploadStyles } from "./Upload.styles";
import CustomError from "~components/CustomError";

export const UploadScreen: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const { cats, isLoading, error, uploadCatImage, uploadStatus } =
    useContext<CatsContextType>(CatsContext);

  const pickImage = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (result.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      presentationStyle:
        ImagePicker.UIImagePickerPresentationStyle.OVER_CURRENT_CONTEXT,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setSelectedImage(pickerResult.assets[0].uri); // URI of the selected image
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }
    uploadCatImage(selectedImage);
  };

  useEffect(() => {
    if (selectedImage) {
      uploadImage();
      setSelectedImage(null);
    }
  }, [selectedImage]);

  return (
    <View>
      <View>
        <Text style={catsListStyles.title}>Iconic Cats</Text>

        <Pressable
          onPress={pickImage}
          style={uploadStyles.container}
          disabled={isLoading || !!error}>
          <View style={uploadStyles.iconContainer}>
            <MaterialIcons name="add" size={30} color="white" />
          </View>
        </Pressable>
      </View>
      {uploadStatus ? <CustomError message={uploadStatus} dismiss /> : null}
    </View>
  );
};
