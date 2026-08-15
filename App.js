import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  StyleSheet, View, Text, ActivityIndicator, BackHandler,
  Linking, Platform, TouchableOpacity, ScrollView, StatusBar as RNStatusBar,
} from "react-native";
import { WebView } from "react-native-webview";
import SITE from "./site";

// ============================================================
// DefarGaaw — application mobile
//
// Principes de robustesse :
//  - l'écran de marque s'affiche IMMÉDIATEMENT (aucune dépendance) ;
//  - la WebView n'est montée qu'ensuite, une fois l'écran visible ;
//  - toute erreur JavaScript est capturée et affichée lisiblement
//    (au lieu d'un écran noir), avec un accès direct à WhatsApp ;
//  - le site est injecté en HTML : fonctionne sans connexion.
// ============================================================

const NIGHT = "#0B0F0E";
const GOLD = "#E0A93B";
const CREAM = "#E9E4D6";
const DIM = "#8A958F";
const BASE_URL = "https://defargaaw.com/";
const WHATSAPP = "https://wa.me/221780190581";
const TEL = "tel:+221780190581";

const openWhatsApp = () => Linking.openURL(WHATSAPP).catch(() => {});
const callUs = () => Linking.openURL(TEL).catch(() => {});

/* ---------- Écran de marque (toujours affichable) ---------- */
function Brand({ children }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.orb} />
      <Text style={styles.brand}>DEFARGAAW</Text>
      <Text style={styles.tag}>répare vite · dakar</Text>
      {children}
    </View>
  );
}

/* ---------- Barrière d'erreur : plus jamais d'écran noir ---------- */
class ErrorBoundary extends React.Component {
  constructor(p) { super(p); this.state = { err: null }; }
  static getDerivedStateFromError(err) { return { err }; }
  render() {
    if (!this.state.err) return this.props.children;
    return (
      <View style={styles.root}>
        <ScrollView contentContainerStyle={styles.overlay}>
          <Text style={styles.brand}>DEFARGAAW</Text>
          <Text style={styles.err}>
            L'affichage a rencontré un problème. Vous pouvez nous joindre directement :
          </Text>
          <TouchableOpacity style={[styles.btn, styles.btnGold]} onPress={openWhatsApp}>
            <Text style={[styles.btnTxt, { color: NIGHT }]}>Écrire sur WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={callUs}>
            <Text style={styles.btnTxt}>Appeler le 78 019 05 81</Text>
          </TouchableOpacity>
          <Text style={styles.detail}>{String(this.state.err && this.state.err.message ? this.state.err.message : this.state.err)}</Text>
        </ScrollView>
      </View>
    );
  }
}

function Main() {
  const webRef = useRef(null);
  const [mountWeb, setMountWeb] = useState(false);
  const [ready, setReady] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const [failed, setFailed] = useState(false);

  // 1) afficher l'écran de marque, puis monter la WebView
  useEffect(() => {
    const t = setTimeout(() => setMountWeb(true), 350);
    return () => clearTimeout(t);
  }, []);

  // 2) filet de sécurité : retirer le voile même si onLoadEnd ne vient pas
  useEffect(() => {
    if (!mountWeb) return;
    const t = setTimeout(() => setReady(true), 7000);
    return () => clearTimeout(t);
  }, [mountWeb]);

  // 3) bouton retour Android
  useEffect(() => {
    if (Platform.OS !== "android") return;
    const onBack = () => {
      if (canGoBack && webRef.current) { webRef.current.goBack(); return true; }
      return false;
    };
    const sub = BackHandler.addEventListener("hardwareBackPress", onBack);
    return () => sub.remove();
  }, [canGoBack]);

  // WhatsApp / téléphone / email / liens externes -> applications natives
  const onShouldStart = useCallback((req) => {
    const url = req.url || "";
    if (url === "about:blank" || url.startsWith("data:") || url.startsWith("file:") ||
        url === BASE_URL || url.startsWith(BASE_URL + "#")) return true;
    if (url.startsWith("http") || url.startsWith("whatsapp:") || url.startsWith("tel:") ||
        url.startsWith("mailto:") || url.startsWith("sms:")) {
      Linking.openURL(url).catch(() => {});
      return false;
    }
    return true;
  }, []);

  return (
    <View style={styles.root}>
      {mountWeb && !failed && (
        <WebView
          ref={webRef}
          source={{ html: SITE, baseUrl: BASE_URL }}
          originWhitelist={["*"]}
          javaScriptEnabled
          domStorageEnabled
          javaScriptCanOpenWindowsAutomatically
          setSupportMultipleWindows={false}
          mixedContentMode="always"
          onShouldStartLoadWithRequest={onShouldStart}
          onNavigationStateChange={(s) => setCanGoBack(s.canGoBack)}
          onLoadEnd={() => setReady(true)}
          onError={() => { setReady(true); setFailed(true); }}
          onHttpError={() => setReady(true)}
          onRenderProcessGone={() => setFailed(true)}
          style={styles.web}
          containerStyle={styles.web}
          overScrollMode="never"
        />
      )}

      {!ready && !failed && (
        <Brand><ActivityIndicator size="large" color={GOLD} style={{ marginTop: 26 }} /></Brand>
      )}

      {failed && (
        <Brand>
          <Text style={styles.err}>
            Le contenu n'a pas pu s'afficher. Joignez-nous directement :
          </Text>
          <TouchableOpacity style={[styles.btn, styles.btnGold]} onPress={openWhatsApp}>
            <Text style={[styles.btnTxt, { color: NIGHT }]}>Écrire sur WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={callUs}>
            <Text style={styles.btnTxt}>Appeler le 78 019 05 81</Text>
          </TouchableOpacity>
        </Brand>
      )}
    </View>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: NIGHT,
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight || 0 : 0,
  },
  web: { flex: 1, backgroundColor: NIGHT },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: NIGHT,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  orb: {
    width: 96, height: 96, borderRadius: 48, backgroundColor: GOLD,
    marginBottom: 26, opacity: 0.92,
  },
  brand: { color: CREAM, fontSize: 30, fontWeight: "900", letterSpacing: 2 },
  tag: { color: DIM, fontSize: 12.5, letterSpacing: 3, marginTop: 6, textTransform: "uppercase" },
  err: { color: DIM, fontSize: 15, textAlign: "center", marginTop: 22, lineHeight: 22 },
  detail: { color: "#5A625E", fontSize: 11.5, textAlign: "center", marginTop: 24 },
  btn: {
    marginTop: 14, borderRadius: 999, paddingVertical: 14, paddingHorizontal: 30,
    borderWidth: 2, borderColor: "#D7E2EA",
  },
  btnGold: { backgroundColor: GOLD, borderColor: GOLD },
  btnTxt: { color: "#D7E2EA", fontWeight: "700", letterSpacing: 1, textTransform: "uppercase", fontSize: 13 },
});
