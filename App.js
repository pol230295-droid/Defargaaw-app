import React, { useState } from "react";
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView,
  Linking, Platform, StatusBar, KeyboardAvoidingView,
} from "react-native";

// ============================================================
// DefarGaaw — application mobile (React Native pur)
// Aucune dépendance externe : uniquement les composants de base.
// Le parcours complet (demande client, candidature artisan)
// aboutit à un message WhatsApp pré-rédigé vers le 78 019 05 81.
// ============================================================

const NIGHT = "#0B0F0E";
const PANEL = "#141A18";
const GOLD = "#E0A93B";
const CLAY = "#D96A43";
const CREAM = "#E9E4D6";
const DIM = "#8A958F";
const LINE = "rgba(215,226,234,0.16)";

const WHATSAPP_NUMBER = "221780190581";
const TEL = "+221780190581";
const EMAIL = "defargaaw@gmail.com";

const METIERS = [
  { e: "❄️", l: "Froid & clim" },
  { e: "⚡", l: "Électricité" },
  { e: "🚿", l: "Plomberie" },
  { e: "🔧", l: "Mécanique" },
  { e: "📺", l: "Électroménager" },
  { e: "🪚", l: "Menuiserie" },
];

const ZONES_OUVERTES = ["Mermoz", "Sacré-Cœur", "Point E", "Ouakam", "Yoff", "Liberté 6"];
const ZONES_AUTRES = [
  "Plateau", "Médina", "Fann", "Grand Dakar", "HLM", "Grand Yoff",
  "Almadies", "Ngor", "Hann Bel-Air", "Parcelles Assainies",
  "Cambérène", "Pikine", "Guédiawaye", "Keur Massar", "Rufisque",
];
const ZONES = [...ZONES_OUVERTES, ...ZONES_AUTRES];

const QUAND = ["Dès que possible", "Aujourd'hui", "Demain matin", "Demain après-midi", "Cette semaine"];

const openUrl = (u) => Linking.openURL(u).catch(() => {});
const sendWhatsApp = (msg) =>
  openUrl("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg));

/* ---------------- composants ---------------- */

function Chip({ label, active, onPress, small }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.chip, small && styles.chipSmall, active && styles.chipOn]}
      activeOpacity={0.75}
    >
      <Text style={[styles.chipTxt, active && styles.chipTxtOn]}>{label}</Text>
    </TouchableOpacity>
  );
}

function Field({ label, ...props }) {
  return (
    <View style={{ marginTop: 18 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor="rgba(215,226,234,0.4)"
        style={[styles.input, props.multiline && styles.inputMulti]}
        {...props}
      />
    </View>
  );
}

function Btn({ label, onPress, kind }) {
  const isGold = kind === "gold";
  const isClay = kind === "clay";
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.btn, isGold && styles.btnGold, isClay && styles.btnClay]}
    >
      <Text style={[styles.btnTxt, (isGold || isClay) && { color: isGold ? NIGHT : "#fff" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

/* ---------------- écrans ---------------- */

function Accueil({ go }) {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.orb}>
        <Text style={styles.orbIcon}>🔧</Text>
      </View>
      <Text style={styles.brand}>DEFARGAAW</Text>
      <Text style={styles.tag}>« répare vite » · dakar</Text>

      <Text style={styles.lead}>
        Une panne ? Nous envoyons chez vous un artisan vérifié — froid, électricité,
        plomberie, mécanique, électroménager, menuiserie.
      </Text>

      <View style={styles.card}>
        <Row k="Déplacement + diagnostic" v="3 000 FCFA" gold />
        <Row k="Réparation" v="sur devis validé par vous" />
        <Row k="Garantie" v="15 jours écrits" />
        <Row k="Paiement" v="Wave · Orange Money" last />
      </View>

      <Btn label="Demander une intervention" kind="clay" onPress={() => go("demande")} />
      <Btn label="Devenir artisan partenaire" onPress={() => go("artisan")} />
      <Btn label="Appeler le 78 019 05 81" onPress={() => openUrl("tel:" + TEL)} />

      <Text style={styles.foot}>
        DefarGaaw · Dakar, Sénégal{"\n"}Réponse de 8h à 20h, 7j/7
      </Text>
    </ScrollView>
  );
}

function Row({ k, v, gold, last }) {
  return (
    <View style={[styles.row, last && { borderBottomWidth: 0 }]}>
      <Text style={styles.rowK}>{k}</Text>
      <Text style={[styles.rowV, gold && { color: GOLD, fontWeight: "800" }]}>{v}</Text>
    </View>
  );
}

function Demande({ go }) {
  const [metier, setMetier] = useState(METIERS[0].l);
  const [zone, setZone] = useState(ZONES_OUVERTES[0]);
  const [quand, setQuand] = useState(QUAND[0]);
  const [desc, setDesc] = useState("");
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [err, setErr] = useState("");

  const envoyer = () => {
    if (desc.trim().length < 8 || !nom.trim() || tel.replace(/\D/g, "").length < 7) {
      setErr("Merci de décrire la panne, et d'indiquer votre nom et votre téléphone.");
      return;
    }
    setErr("");
    sendWhatsApp(
      "🔧 NOUVELLE DEMANDE — DefarGaaw\n" +
      "Service : " + metier + "\n" +
      "Quartier : " + zone + "\n" +
      "Panne : " + desc.trim() + "\n" +
      "Quand : " + quand + "\n" +
      "Nom : " + nom.trim() + "\n" +
      "Téléphone : " + tel.trim()
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
      <Text style={styles.h2}>Demander une intervention</Text>
      <Text style={styles.sub}>
        Votre demande nous arrive sur WhatsApp. Nous confirmons l'artisan et l'heure,
        puis nous envoyons le lien de paiement du diagnostic (3 000 F).
      </Text>

      <Text style={styles.label}>Quel service ?</Text>
      <View style={styles.wrap}>
        {METIERS.map((m) => (
          <Chip key={m.l} label={m.e + "  " + m.l} active={metier === m.l} onPress={() => setMetier(m.l)} />
        ))}
      </View>

      <Text style={[styles.label, { marginTop: 18 }]}>Votre quartier</Text>
      <View style={styles.wrap}>
        {ZONES.map((z) => (
          <Chip
            key={z}
            small
            label={ZONES_OUVERTES.includes(z) ? z + " ✓" : z}
            active={zone === z}
            onPress={() => setZone(z)}
          />
        ))}
      </View>
      <Text style={styles.hint}>✓ = quartier couvert dès maintenant</Text>

      <Field
        label="Décrivez la panne"
        value={desc}
        onChangeText={setDesc}
        multiline
        placeholder="Ex : mon frigo ne refroidit plus depuis hier, le moteur tourne mais ne gèle pas…"
      />

      <Text style={[styles.label, { marginTop: 18 }]}>Quand ?</Text>
      <View style={styles.wrap}>
        {QUAND.map((q) => (
          <Chip key={q} small label={q} active={quand === q} onPress={() => setQuand(q)} />
        ))}
      </View>

      <Field label="Votre nom" value={nom} onChangeText={setNom} placeholder="Ex : Awa Diallo" />
      <Field
        label="Votre téléphone"
        value={tel}
        onChangeText={setTel}
        placeholder="77 123 45 67"
        keyboardType="phone-pad"
      />

      {err ? <Text style={styles.err}>{err}</Text> : null}

      <Btn label="Envoyer sur WhatsApp" kind="gold" onPress={envoyer} />
      <Btn label="Appeler plutôt" onPress={() => openUrl("tel:" + TEL)} />
      <Btn label="‹ Retour" onPress={() => go("accueil")} />
    </ScrollView>
  );
}

function Artisan({ go }) {
  const [nom, setNom] = useState("");
  const [metier, setMetier] = useState(METIERS[0].l);
  const [zone, setZone] = useState(ZONES[0]);
  const [exp, setExp] = useState("");
  const [tel, setTel] = useState("");
  const [err, setErr] = useState("");

  const envoyer = () => {
    if (!nom.trim() || !exp.trim() || tel.replace(/\D/g, "").length < 7) {
      setErr("Merci d'indiquer votre nom, votre expérience et votre téléphone.");
      return;
    }
    setErr("");
    sendWhatsApp(
      "🧰 CANDIDATURE ARTISAN — DefarGaaw\n" +
      "Nom : " + nom.trim() + "\n" +
      "Métier : " + metier + "\n" +
      "Zone : " + zone + "\n" +
      "Expérience : " + exp.trim() + "\n" +
      "Téléphone : " + tel.trim()
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
      <Text style={styles.h2}>Devenir artisan partenaire</Text>
      <Text style={styles.sub}>
        Inscription gratuite. DefarGaaw prélève 15 % par intervention réussie —
        vous ne payez que lorsque vous gagnez. Un entretien de vérification
        (identité, compétences, références) précède la première mission.
      </Text>

      <Field label="Votre nom" value={nom} onChangeText={setNom} placeholder="Ex : Mamadou Sow" />

      <Text style={[styles.label, { marginTop: 18 }]}>Votre métier principal</Text>
      <View style={styles.wrap}>
        {METIERS.map((m) => (
          <Chip key={m.l} label={m.e + "  " + m.l} active={metier === m.l} onPress={() => setMetier(m.l)} />
        ))}
      </View>

      <Text style={[styles.label, { marginTop: 18 }]}>Votre zone</Text>
      <View style={styles.wrap}>
        {ZONES.map((z) => (
          <Chip key={z} small label={z} active={zone === z} onPress={() => setZone(z)} />
        ))}
      </View>

      <Field
        label="Votre expérience, en une phrase"
        value={exp}
        onChangeText={setExp}
        placeholder="Ex : 8 ans en froid et climatisation, atelier à Grand Yoff"
      />
      <Field
        label="Votre téléphone"
        value={tel}
        onChangeText={setTel}
        placeholder="77 123 45 67"
        keyboardType="phone-pad"
      />

      {err ? <Text style={styles.err}>{err}</Text> : null}

      <Btn label="Postuler sur WhatsApp" kind="gold" onPress={envoyer} />
      <Btn label="‹ Retour" onPress={() => go("accueil")} />
    </ScrollView>
  );
}

/* ---------------- application ---------------- */

export default function App() {
  const [ecran, setEcran] = useState("accueil");
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={NIGHT} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {ecran === "accueil" && <Accueil go={setEcran} />}
        {ecran === "demande" && <Demande go={setEcran} />}
        {ecran === "artisan" && <Artisan go={setEcran} />}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: NIGHT,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 44,
  },
  page: { padding: 22, paddingBottom: 56, alignItems: "stretch" },

  orb: {
    width: 96, height: 96, borderRadius: 48, backgroundColor: GOLD,
    alignSelf: "center", alignItems: "center", justifyContent: "center", marginTop: 10,
  },
  orbIcon: { fontSize: 42 },
  brand: {
    color: CREAM, fontSize: 34, fontWeight: "900", letterSpacing: 2,
    textAlign: "center", marginTop: 20,
  },
  tag: {
    color: GOLD, fontSize: 12.5, letterSpacing: 3, textAlign: "center",
    marginTop: 6, textTransform: "uppercase",
  },
  lead: {
    color: DIM, fontSize: 15.5, lineHeight: 23, textAlign: "center", marginTop: 22,
  },

  card: {
    backgroundColor: PANEL, borderRadius: 20, borderWidth: 1, borderColor: LINE,
    paddingHorizontal: 18, marginTop: 26, marginBottom: 8,
  },
  row: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: LINE,
  },
  rowK: { color: DIM, fontSize: 13.5, flex: 1 },
  rowV: { color: CREAM, fontSize: 14, fontWeight: "600", marginLeft: 12, textAlign: "right", flex: 1 },

  h2: { color: CREAM, fontSize: 25, fontWeight: "900", marginTop: 8 },
  sub: { color: DIM, fontSize: 14.5, lineHeight: 22, marginTop: 10, marginBottom: 22 },
  label: {
    color: CREAM, fontSize: 12.5, fontWeight: "700",
    letterSpacing: 1, textTransform: "uppercase", marginBottom: 10,
  },
  hint: { color: DIM, fontSize: 12, marginTop: 8 },

  wrap: { flexDirection: "row", flexWrap: "wrap" },
  chip: {
    borderWidth: 1.5, borderColor: LINE, borderRadius: 999,
    paddingVertical: 11, paddingHorizontal: 15, marginRight: 8, marginBottom: 8,
    backgroundColor: "rgba(215,226,234,0.04)",
  },
  chipSmall: { paddingVertical: 9, paddingHorizontal: 13 },
  chipOn: { borderColor: GOLD, backgroundColor: "rgba(224,169,59,0.14)" },
  chipTxt: { color: DIM, fontSize: 13.5, fontWeight: "600" },
  chipTxtOn: { color: CREAM },

  input: {
    borderWidth: 1.5, borderColor: LINE, borderRadius: 14, backgroundColor: "rgba(215,226,234,0.05)",
    color: CREAM, fontSize: 16, paddingHorizontal: 14, paddingVertical: 13,
  },
  inputMulti: { minHeight: 96, textAlignVertical: "top" },

  btn: {
    borderRadius: 999, borderWidth: 2, borderColor: "#D7E2EA",
    paddingVertical: 15, alignItems: "center", marginTop: 14,
  },
  btnGold: { backgroundColor: GOLD, borderColor: GOLD },
  btnClay: { backgroundColor: CLAY, borderColor: CLAY },
  btnTxt: {
    color: CREAM, fontSize: 14, fontWeight: "800",
    letterSpacing: 1, textTransform: "uppercase",
  },

  err: { color: CLAY, fontSize: 13.5, marginTop: 16, lineHeight: 20 },
  foot: { color: DIM, fontSize: 12.5, textAlign: "center", marginTop: 30, lineHeight: 19 },
});
