import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  StyleSheet, View, Text, ActivityIndicator, BackHandler,
  Linking, Platform, TouchableOpacity, SafeAreaView, StatusBar as RNStatusBar,
} from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";

// ============================================================
// DefarGaaw — application mobile
// Le site est embarqué dans l'application (dossier /web) : il
// s'affiche même sans connexion. Les liens WhatsApp, téléphone
// et email sont ouverts par les applications natives du système.
// ============================================================

const NIGHT = "#0B0F0E";
const GOLD = "#E0A93B";
const DIM = "#8A958F";

// Site embarqué (fonctionne hors connexion).
const LOCAL_SITE = require("./web/index.html");

export default function App() {
  const webRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const [failed, setFailed] = useState(false);

  // Bouton "retour" Android : revient dans l'historique du site.
  useEffect(() => {
    if (Platform.OS !== "android") return;
    const onBack = () => {
      if (canGoBack && webRef.current) {
        webRef.current.goBack();
        return true;
      }
      return false;
    };
    const sub = BackHandler.addEventListener("hardwareBackPress", onBack);
    return () => sub.remove();
  }, [canGoBack]);

  // Interception : WhatsApp, téléphone, email et liens externes
  // partent vers les applications natives, pas dans la WebView.
  const onShouldStart = useCallback((req) => {
    const url = req.url || "";
    const external =
      url.startsWith("whatsapp:") ||
      url.startsWith("tel:") ||
      url.startsWith("mailto:") ||
      url.includes("wa.me") ||
      url.includes("api.whatsapp.com");

    if (external) {
      Linking.openURL(url).catch(() => {});
      return false;
    }
    // navigation interne (fichier local ou ancres) : autorisée
    if (url.startsWith("file://") || url.startsWith("about:") || url.startsWith("data:")) return true;

    // tout autre lien http(s) externe -> navigateur du téléphone
    if (url.startsWith("http")) {
      Linking.openURL(url).catch(() => {});
      return false;
    }
    return true;
  }, []);

  const retry = () => {
    setFailed(false);
    setLoading(true);
    webRef.current?.reload();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" backgroundColor={NIGHT} translucent={false} />
      <View style={styles.container}>
        {!failed && (
          <WebView
            ref={webRef}
            source={LOCAL_SITE}
            originWhitelist={["*"]}
            allowFileAccess
            javaScriptEnabled
            javaScriptCanOpenWindowsAutomatically
            domStorageEnabled
            setSupportMultipleWindows={false}
            mediaPlaybackRequiresUserAction={false}
            onShouldStartLoadWithRequest={onShouldStart}
            onNavigationStateChange={(s) => setCanGoBack(s.canGoBack)}
            onLoadEnd={() => setLoading(false)}
            onError={() => { setLoading(false); setFailed(true); }}
            style={styles.web}
            containerStyle={styles.web}
            // rendu fluide sur Android
            androidLayerType="hardware"
            overScrollMode="never"
          />
        )}

        {loading && !failed && (
          <View style={styles.overlay}>
            <Text style={styles.brand}>DEFARGAAW</Text>
            <Text style={styles.tag}>répare vite · Dakar</Text>
            <ActivityIndicator size="large" color={GOLD} style={{ marginTop: 22 }} />
          </View>
        )}

        {failed && (
          <View style={styles.overlay}>
            <Text style={styles.brand}>DEFARGAAW</Text>
            <Text style={styles.err}>
              Impossible d'afficher le contenu. Vérifiez votre connexion, puis réessayez.
            </Text>
            <TouchableOpacity style={styles.btn} onPress={retry} accessibilityRole="button">
              <Text style={styles.btnTxt}>Réessayer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.btnAlt]}
              onPress={() => Linking.openURL("https://wa.me/221780190581").catch(() => {})}
            >
              <Text style={[styles.btnTxt, { color: NIGHT }]}>Nous écrire sur WhatsApp</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: NIGHT, paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0 },
  container: { flex: 1, backgroundColor: NIGHT },
  web: { flex: 1, backgroundColor: NIGHT },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: NIGHT,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  brand: { color: "#E9E4D6", fontSize: 30, fontWeight: "900", letterSpacing: 2 },
  tag: { color: DIM, fontSize: 13, letterSpacing: 3, marginTop: 6, textTransform: "uppercase" },
  err: { color: DIM, fontSize: 15, textAlign: "center", marginTop: 18, lineHeight: 22 },
  btn: {
    marginTop: 18, borderRadius: 999, paddingVertical: 14, paddingHorizontal: 34,
    borderWidth: 2, borderColor: "#D7E2EA",
  },
  btnAlt: { backgroundColor: GOLD, borderColor: GOLD },
  btnTxt: { color: "#D7E2EA", fontWeight: "700", letterSpacing: 1, textTransform: "uppercase", fontSize: 13 },
});
