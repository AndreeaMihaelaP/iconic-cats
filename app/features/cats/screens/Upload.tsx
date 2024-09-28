import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as ImagePicker from "expo-image-picker";
import { StyleSheet } from "react-native";

import { uploadStyles } from "./Upload.styles";
import { CatsContextType, CatsContext } from "~services/cats/cats.context";
import { MaterialIcons } from "@expo/vector-icons";
import { catsListStyles } from "./CatsList.styles";

const CAT_API_KEY =
  "live_QCGCfufAhs7kj2iWCxUEyRVITTkk91tDv0N9Sbm7ENZhZ7vVVZgTEAmNyoT9Sd5S";

const _indicatorSize = 4;
const _spacing = 14;
const _buttonSize = 64;
export const UploadScreen: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const { cats, isLoading, error } = useContext<CatsContextType>(CatsContext);

  // Function to pick image from the device gallery
  const pickImage = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (result.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("pickerResult", pickerResult);

    if (!pickerResult.canceled) {
      setSelectedImage(pickerResult.assets[0].uri); // URI of the selected image
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", {
      uri: selectedImage,
      name: "cat.jpg", // Name for the image file
      type: "image/jpeg",
    });

    console.log("formData", formData);

    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/upload",
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
            "x-api-key": CAT_API_KEY, // Pass the API key in the header
          },
          body: formData,
        }
      );

      const data = await response.json();
      console.log("dataaaaa", data);

      if (response.ok) {
        setUploadStatus("Mission accomplished! Image ID: " + data.id);
      } else {
        setUploadStatus("WHO KNOWS!As a cat I dont care: " + data.message);
      }
    } catch (error) {
      setUploadStatus("I told y ou i have to be a CAT: " + error.message);
    }
  };

  console.log("CATSSSSS", cats);

  console.log("selectedImage", selectedImage);
  return (
    <View style={styles.container}>
      <>
        <Text style={catsListStyles.title}>Iconic Cats</Text>

        <Pressable
          onPress={() => {}}
          style={{
            position: "absolute",
            bottom: _spacing * 1,
            right: _spacing * 2,
          }}>
          <View
            style={{
              width: _buttonSize,
              height: _buttonSize,
              borderRadius: _buttonSize / 2,
              backgroundColor: "#363636",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <MaterialIcons name="add" size={_buttonSize / 2} color="white" />
          </View>
        </Pressable>
      </>
      {selectedImage && (
        <>
          <View style={styles.container}>
            <Image source={{ uri: selectedImage }} style={styles.image} />
          </View>
          <Button
            title="First step: done. Do you want to make this cat famous? Press here. If Im not a cat don't select me and try again  "
            onPress={uploadImage}
          />
        </>
      )}
      {uploadStatus ? <Text style={styles.status}>{uploadStatus}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  status: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
  },
});
