<template>
  <q-page class="flex flex-center bg-primary">
    <q-card
      style="
        width: 300px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      "
    >
      <q-card-section class="full-width">
        <img class="full-width" src="../../assets/quasar-logo-vertical.svg" ratio="16:9" width="200px" />
      </q-card-section>

      <q-card-section class="full-width q-pt-none">
        <p class="text-h5 text-center q-mb-none">Esqueci minha senha</p>
      </q-card-section>

      <q-card-section class="q-pt-none full-width">
        <p class="text-subtitle text-center">Um e-mail foi enviado para você com o link de acesso para recuperar sua senha.</p>
      </q-card-section>

      <q-card-actions class="q-pt-none full-width">
        <q-btn class="q-mx-sm" style="width: 100%" flat no-caps color="primary" label="Voltar para login" @click="$router.push({ name: 'login' })" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'NotificationPassword',
  data () {
    return {}
  }
}
</script>
