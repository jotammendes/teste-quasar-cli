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
      <img src="https://cdn.quasar.dev/img/mountains.jpg" ratio="1" width="200px"
      />

      <q-card-section class="full-width">
        <p class="text-h5 text-center q-mb-none">Login</p>
      </q-card-section>

      <q-card-section class="q-pt-none full-width">
        <q-input filled v-model="email" color="primary" label="E-mail" />
        <q-input filled class="q-mt-sm" v-model="password" color="primary" label="Senha" :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

      </q-card-section>

      <q-card-actions class="q-pt-none full-width">
        <q-btn class="q-mx-sm shadow-none" style="width: 100%;" color="primary" label="Login" @click="$router.push({ name: 'home' })" />
      </q-card-actions>
      <q-card-actions class="q-pt-none q-mt-sm full-width">
        <q-btn class="q-mx-sm" style="width: 100%" flat no-caps color="primary" label="Esqueci minha senha" @click="$router.push({ name: 'forgotPassword' })" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      isPwd: true
    }
  }
}
</script>
