import { View, Text, StyleSheet, Alert, Modal } from "react-native";
import { fontFamily } from "@/styles/font-family";
import Welcome from "@/components/welcome/welcome";
import Steps from "@/components/steps/steps";
import { Button } from "@/components/button/buttonGo";

import { api } from "@/services/api";
import { router } from "expo-router";
import { useLocalSearchParams, Redirect } from "expo-router";
import { useEffect, useState, useRef } from "react";
import Loading from "@/components/loading/loading";
import Cover from "@/components/market/cover/cover";
import Details, { PropsDetails } from "@/components/market/details/details";
import Coupons from "@/components/market/coupon/coupons";
import { CameraView, useCameraPermissions } from "expo-camera";

type DataProps = PropsDetails & {
  cover: string;
};

export default function Market() {
  const params = useLocalSearchParams<{ id: string }>();
  const [data, setData] = useState<DataProps>();
  const [coupon, setCoupon] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [permission, requestPermission] = useCameraPermissions();

  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false);

  const [couponsIsFetching, setCouponIsFetching] = useState(false);

  const qrLog = useRef(false);
  console.log(params.id);

  async function fetchMarket() {
    try {
      const { data } = await api.get("/markets/" + params.id);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possivel carregar os dados.", [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]);
    }
  }
  // Function para pedir permissão da camera
  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission();
      if (!granted) {
        return Alert.alert("Opa", "Você precisa habilitar o uso da câmera");
      }
      qrLog.current = false;
      setIsVisibleCameraModal(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCoupon(id: string) {
    try {
      setCouponIsFetching(true);

      const { data } = await api.patch("/coupons/" + id);
      Alert.alert("Cupom", data.coupon);
      setCoupon(data.coupon);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possivel utilizar o cupom.");
    } finally {
      setCouponIsFetching(false);
    }
  }

  function handleUseCoupon(id: string) {
    setIsVisibleCameraModal(false);

    Alert.alert(
      "Cupom",
      "Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?",
      [
        { style: "cancel", text: "Não" },
        { text: "Sim", onPress: () => getCoupon(id) },
      ]
    );
  }

  useEffect(() => {
    fetchMarket();
  }, [params.id, coupon]);

  if (isLoading) {
    return <Loading />;
  }
  if (!data) {
    return <Redirect href="/home" />;
  }

  return (
    <View style={styles.container}>
      <Cover uri={data?.cover} />
      {data && <Details data={data} />}

      {coupon && <Coupons code={coupon} />}
      <View style={styles.containerBtnQR}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>
      <Modal style={styles.modalContainer} visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrLog.current) {
              qrLog.current = true;
              setTimeout(() => handleUseCoupon(data), 500);
            }
          }}
        >
          <View style={styles.modalContainerView}>
            <Button
              onPress={() => setIsVisibleCameraModal(false)}
              isLoading={couponsIsFetching}
            >
              <Button.Title>Voltar</Button.Title>
            </Button>
          </View>
        </CameraView>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBtnQR: {
    padding: 32,
  },
  modalContainer: {
    flex: 1,
  },
  modalContainerView: {
    position: "absolute",
    bottom: 32,
    left: 32,
    right: 32,
  },
});
