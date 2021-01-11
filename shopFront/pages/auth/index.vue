<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">
                          Sign in to site
                        </h1>
                        <div class="text-center my-2" mt-4>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mlt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form @keydown.prevent="login">
                          <v-text-field
                            label="Email"
                            name="email"
                            id="email"
                            type="email"
                            color="teal accent-3"
                            prepend-icon="email"
                            v-model="logForm.email"
                            :error-messages="errors.email"
                          />
                          <v-text-field
                            label="Password"
                            name="password"
                            id="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            v-model="logForm.password"
                            :error-messages="errors.password"
                          />
                        </v-form>
                        <h3 class="text-center mt-3">Forget your Password</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          rounded
                          color="teal accent-3"
                          type="submit"
                          dark
                          @click.prevent="login"
                          >SIGN IN</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friends !</h1>
                        <h5 class="text-center">
                          Enter youre personal details and Start !
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">welcome Back !</h1>
                        <h5 class="text-center">To keep connented with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">SIGN IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">
                          Create account
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form @keydown.prevent="register">
                          <v-text-field
                            label="Name"
                            name="name"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                            id="name"
                            v-model="regForm.name"
                            :error-messages="errors.name"
                          />
                          <v-text-field
                            label="UserName"
                            name="username"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                            id="username"
                            v-model="regForm.username"
                            :error-messages="errors.username"
                          />
                          <v-text-field
                            label="Email"
                            name="email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                            id="email"
                            v-model="regForm.email"
                            :error-messages="errors.email"
                          />
                          <v-text-field
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            id="password"
                            v-model="regForm.password"
                            :error-messages="errors.password"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn
                          rounded
                          color="teal accent-3"
                          type="submit"
                          dark
                          @click.prevent="register"
                          >Register</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      step: 1,
      regForm: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
      logForm: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  props: {
    source: String,
  },

  methods: {
    async register() {
      try {
        await this.$axios.post("api/panel/auth/register", this.regForm);
        this.step = 1;
        // this.$router.push("/auth");
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    async login() {
      await this.$auth
        .loginWith("local", {
          data: {
            email: this.logForm.email,
            password: this.logForm.password,
          },
        })
        .catch((e) => {
          this.errors = e.response.data.errors;
        });
      console.log(this.data);
      //this.$router.push("/");
    },
  },
};
</script>
