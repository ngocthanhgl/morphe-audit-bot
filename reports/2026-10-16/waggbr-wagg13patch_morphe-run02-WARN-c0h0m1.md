# WaggBR/Wagg13Patch_Morphe — 2026-10-16

Commit: 99062638dc4dde907b93f428daf18a43cf4a1634 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[info] extensions/extension/build.gradle.kts — new external dependency added — verify coordinates [llm: benign 0.75 — no ban]</summary>

```
    namespace = "app.morphe.extension.common"
}

dependencies {
    implementation("org.lsposed.hiddenapibypass:hiddenapibypass:6.1")

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/BuzzCast/BuzzCastPatch.kt — new non-allowlisted URL or IP</summary>

```
// Patches BuzzCast 3.2.92 (base: rushiranpise/morphe-patches, commit 7d640be). NÃO TESTADO em dispositivo.
//
// REGRA IMPORTANTE (erro real visto no log: VerifyError "target dex pc 0x2a is not at instruction start"):
// addInstructions(índice, smali) NÃO recalcula labels locais do trecho inserido. Labels (:cont, :skip...) só
// funcionam quando o trecho é inserido no índice 0 do método. Em qualquer outro índice, NÃO use labels/desvios
// (if-*, goto) dentro do smali inserido; use replaceInstruction/nop ou reestruture sem desvio.
//
// Atualização 3.2.90 -> 3.2.92: o bytecode de TODOS os métodos alterados é idêntico nas duas versões
// (comparado instrução a instrução). Só mudaram: (a) os IDs de recurso da tela de Ajustes (versionLL/versionTV...,
// 0x7f0a1638/0x7f0a163a -> 0x7f0a163b/0x7f0a163d) e (b) os nomes ofuscados dos métodos de billing
// (H0,J0,J1... -> Q0,R0,e2...), que o filtro por assinatura já cobre.
//   3) "Hide join and follow messages" -> esconde "ingressou" e "Seguiu a âncora" no chat da live
//   4) "Hide live room cards"          -> esconde os cards do canto da live (evento, parede de honra, recarga)
//   5) "Hide home banner"              -> esconde o carrossel de banners/promoções no meio da lista da aba inicial
//   (oculto) branding Wagg13  -> tela de Ajustes: linha "Versão" vira link do canal + rodapé do mod.
```

</details>


__
