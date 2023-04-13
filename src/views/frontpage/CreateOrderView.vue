<template>
  <main>
    <section class="pt-30 pb-15">
      <div class="container pt-30">
        <div class="mb-15">
          <div class="border-bottom border-2 border-dark mb-10">
            <h2 class="fs-20 fw-bold">填寫預約人資料</h2>
          </div>
          <VForm
            v-slot="{ errors }"
            ref="form"
            @submit="sendOrder(orderInfo, this.$router, this.$refs.form)"
          >
            <div class="form-floating mb-1">
              <VField
                name="預約人姓名"
                type="text"
                class="form-control border-0 border-bottom border-dark rounded-0 shadow-none"
                :class="{ 'is-invalid': errors.預約人姓名 }"
                placeholder="name"
                rules="required"
                v-model="orderInfo.data.user.name"
              />
              <label for="floatingInput">預約人姓名 :</label>
              <VError name="預約人姓名" class="invalid-feedback"></VError>
            </div>
            <div class="form-floating mb-1">
              <VField
                name="聯絡人電話"
                type="tel"
                class="form-control border-0 border-bottom border-dark rounded-0 shadow-none"
                :class="{ 'is-invalid': errors.聯絡人電話 }"
                placeholder="tel"
                rules="required|phoneRegex"
                v-model="orderInfo.data.user.tel"
              />
              <label for="floatingPassword">電話 :</label>
              <VError name="聯絡人電話" class="invalid-feedback"></VError>
            </div>
            <div class="form-floating">
              <VField
                name="email"
                type="email"
                class="form-control border-0 border-bottom border-dark rounded-0 shadow-none"
                :class="{ 'is-invalid': errors.email }"
                placeholder="email"
                rules="email|required"
                v-model="orderInfo.data.user.email"
              />
              <label for="floatingPassword">電子信箱 :</label>
              <VError name="email" class="invalid-feedback" style="height: 21px"></VError>
            </div>
            <div class="form-floating mb-10">
              <VField
                name="預約人聯絡地址"
                type="text"
                class="form-control border-0 border-bottom border-dark rounded-0 shadow-none"
                :class="{ 'is-invalid': errors.預約人聯絡地址 }"
                placeholder="address"
                rules="required|addressRegex"
                v-model="orderInfo.data.user.address"
              />
              <label for="floatingPassword">預約人聯絡地址 :</label>
              <VError name="預約人聯絡地址" class="invalid-feedback" style="height: 21px"></VError>
            </div>
            <label for="info" class="mb-5">備註 :</label>
            <VField name="備註留言" v-slot="{ field, errors: fieldErrors }" rules="max:1000">
              <textarea
                name="備註留言"
                id="info"
                cols="30"
                rows="10"
                class="form-control rounded-0 mb-5"
                style="resize: none"
                v-bind="field"
                :class="{ 'is-invalid': fieldErrors.備註留言 }"
                v-model="orderInfo.data.message"
              ></textarea>
              <div v-if="fieldErrors[0]" class="text-danger fs-7 mb-10">{{ fieldErrors[0] }}</div>
            </VField>
            <div class="mb-5 form-check">
              <VField
                name="check"
                type="checkbox"
                class="form-check-input rounded-0 shadow-none"
                id="policyCheck"
                rules="policyCheck"
              />
              <label class="form-check-label text-dark" for="policyCheck"
                >已詳閱我們的<RouterLink to="/policyRule" class="text-blue" target="_blank"
                  >”政策與保險”</RouterLink
                >條款，並同意所有相關規範。</label
              >
              <VError
                name="check"
                class="fs-7 d-block invalid-feedback"
                style="height: 21px"
              ></VError>
            </div>
            <div class="d-flex justify-content-between justify-content-sm-end">
              <RouterLink to="/reserveList" class="btn btn-dark rounded-0 me-15 px-10"
                >返回上一步</RouterLink
              >
              <button class="btn btn-dark rounded-0" type="submit">建立訂單並進行付款</button>
            </div>
          </VForm>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import payStore from '../../stores/payStore.js'
import { mapActions } from 'pinia'
import { Field, Form, ErrorMessage, configure, defineRule } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, loadLocaleFromURL } from '@vee-validate/i18n'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.0.2/dist/locale/zh_TW.json')

configure({
  generateMessage: localize('zh_TW'),
  validateOnInput: true
})

defineRule('phoneRegex', (value) => {
  const phoneRegex = /^(09\d{8}|0\d{1,2}-?\d{6,8})$/

  if (phoneRegex.test(value) === true) {
    return true
  } else {
    return '請輸入09開頭共10碼手機號 或 0X-開頭市內電話。'
  }
})

defineRule('addressRegex', (value) => {
  const addressRegex = /^[\u4E00-\u9FA5]+[市縣區]+[\u4E00-\u9FA5]/
  if (addressRegex.test(value) === true) {
    return true
  } else {
    return '請輸入您的聯絡地址(非取車地址)，並輸入正確的台灣(中文)地址格式。'
  }
})

defineRule('policyCheck', (value) => {
  value = !value
  if (value === true) {
    return true
  } else {
    return '請詳閱”政策與保險”條款，並同意所有相關規範勾選確認。'
  }
})

export default {
  data() {
    return {
      orderInfo: {
        data: {
          user: {
            name: '',
            email: '',
            tel: '',
            address: ''
          },
          message: ''
        }
      }
    }
  },
  components: {
    VField: Field,
    VForm: Form,
    VError: ErrorMessage
  },
  methods: {
    ...mapActions(payStore, ['sendOrder'])
  }
}
</script>
