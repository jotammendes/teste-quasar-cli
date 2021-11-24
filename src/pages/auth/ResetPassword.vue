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
        <p class="text-h5 text-center">Restaurar minha senha</p>
        <p class="text-subtitle text-center">Informe uma nova senha para recuperarmos seu acesso.</p>
      </q-card-section>

      <q-card-section class="q-pt-none full-width">
        <q-input filled v-model="email" color="primary" label="E-mail" />
        <q-input filled class="q-mt-sm" v-model="password" color="primary" label="Senha" :type="isPwd1 ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd1 ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd1 = !isPwd1"
            />
          </template>
        </q-input>
        <q-input filled class="q-mt-sm" v-model="confirm_password" color="primary" label="Confirmar Senha" :type="isPwd2 ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd2 ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd2 = !isPwd2"
            />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions class="q-pt-none q-mt-sm full-width">
        <q-btn class="q-mx-sm" style="width: 100%" no-caps color="primary" label="Recuperar Senha" @click="$router.push({ name: 'login' })" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'ResetPassword',
  data () {
    return {
      email: '',
      password: '',
      confirm_password: '',
      isPwd1: true,
      isPwd2: true
    }
  }
}
</script>
