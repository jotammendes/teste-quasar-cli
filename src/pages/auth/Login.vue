<template>
  <q-page class="flex flex-center bg-primary">
    <q-card
      class="q-mx-md q-my-md"
      style="
        max-width: 450px;
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
        <p class="text-h5 text-center q-mb-none">{{ $t('login') }}</p>
      </q-card-section>

      <q-form
        @submit="submitForm"
        class="full-width q-m-none"
      >
        <q-card-section class="q-pt-none full-width">
          <q-input filled v-model="email" color="primary" :label="$t('email')" />
          <q-input filled class="q-mt-sm" v-model="password" color="primary" :label="$t('password')" :type="isPwd ? 'password' : 'text'">
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
          <q-btn type="submit" class="q-mx-sm shadow-none" style="width: 100%;" color="primary" label="Login" />
        </q-card-actions>
        <q-card-actions class="q-pt-none q-mt-sm full-width">
          <q-btn class="q-mx-sm" style="width: 100%" flat no-caps color="primary" label="Esqueci minha senha" @click="$router.push({ name: 'forgotPassword' })" />
        </q-card-actions>
        </q-form>
      <q-card-section class="q-pt-none full-width">
        <q-select
          v-model="locale"
          :options="localeOptions"
          label="Quasar Language"
          dense
          borderless
          emit-value
          map-options
          options-dense
          style="min-width: 150px"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
// import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
let $q

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    submitForm () {
      if (!this.email || !this.password) {
        // eslint-disable-next-line
        $q.notify({
          type: 'negative',
          message: 'Os dados informados são inválidos.'
        })
      } else {
        // eslint-disable-next-line
        $q.notify({
          type: 'positive',
          message: 'Login efetuado com sucesso.'
        })
        // eslint-disable-next-line
        this.$router.push({ name: 'home' })
      }
    }
  },
  mounted () {
    $q = useQuasar()
  },
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'pt-BR', label: 'Portuguese' }
      ]
    }
  }
}
</script>
