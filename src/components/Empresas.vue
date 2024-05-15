<template>
  <v-container class="pa-6" fluid>
      <v-row class="mt-2">
        <v-col cols="6">
          <div class="px-4">
            <p class="font-weight-bold text-h5 text-xl-h4">EFD</p>
            <p class="font-weight-bold text-h6 text-xl-h5">EFD | <span class="text-marromPrincipal">Empresas</span></p>
          </div>
        </v-col>
        <v-col class="d-flex justify-end align-start" cols="6">
          <div class="d-flex bg-branco pa-3 shadow rounded-lg">
            <p class="bg-laranja mr-3 px-4">1</p>
            <div class="mr-2">
              <p class="text-body-2 text-marromPrincipal">00.000.000/0000-00</p>
              <p class="text-body-2">Selecione uma empresa</p>
            </div>
            <v-icon color="marromPrincipal" class="mr-1 cursor-pointer" @click="modalTrocarEmpresa = true">mdi-repeat</v-icon>
            <v-icon color="vermelho" class="cursor-pointer">mdi-exit-to-app</v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row class="shadow mt-10 rounded-lg bg-branco">
        <v-col cols="12">
          <div>
            <div class="d-flex justify-space-between align-center py-2 px-4 mb-2">
              <p class="font-weight-bold text-h6 text-xl-h5">Licenças</p>
              <v-btn prepend-icon="mdi-cart" class="bg-laranja d-none d-sm-flex" density="comfortable">Adquirir Licenças</v-btn>
              <v-btn class="bg-laranja d-sm-none" icon="mdi-cart" density="comfortable"></v-btn>
            </div>

            <div class="px-6 d-flex flex-wrap">
              <div v-for="teste in testes" :key="teste">                            
                <div class="elevation-1 card-licenca py-1 px-2 mr-2 mb-2 rounded">
                  <div class="d-flex align-center justify-space-between position-relative">
                    <p class="bg-marromPrincipal py-1 px-2 rounded text-caption">1</p>
                    <p>{{ teste }}</p>
                    <v-icon @click="cardAtivacao === null ? definirCardAtivacao(teste) : cardAtivacao = null">mdi-dots-horizontal</v-icon>
                  </div>                                  
                </div> 
                <div class="elevation-1 py-3 px-4 rounded-lg"  v-if="cardAtivacao === teste">
                  <div class="d-flex">
                    <p class="mr-2">Testo a ser escolhido</p>
                    <v-btn class="bg-verdeClaro text-caption text-verde" density="compact" @click="modalVerificarDisponibilidade = true">Ativar</v-btn>
                  </div>
                </div>    
              </div>                                    
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col class="d-flex justify-center justify-md-start" cols="12" md="6">
            <p class="font-weight-bold  text-h6 text-xl-h5 ml-4">Empresas</p>                   
        </v-col>
        <v-col class="d-flex justify-end" cols="12" md="6">
          <v-text-field
              append-icon="mdi-magnify"
              label="Pesquisar por"
              placeholder="Digite aqui..."
              variant="solo-filled"
              max-width="300px"
              height="100px"
              density="compact"
              class="mr-4"
              clearable      
                     
            ></v-text-field>   
        </v-col>
      </v-row>
      <v-row class="mt-4 shadow rounded-lg">
        <v-col class="overflow-x-auto" cols="12">
          <v-row class="border-b bg-branco">
            <v-col class="text-center font-weight-bold">
              <p>CNPJ</p>
            </v-col>
            <v-col class="text-center font-weight-bold">
              <p>Razão Social</p>
            </v-col>
            <v-col class="text-center font-weight-bold">
              <p>Licenças</p>
            </v-col>
            <v-col class="text-center font-weight-bold">
              <p>Ações</p>
            </v-col>
          </v-row>
          <v-row class="border-b bg-branco tr-linha">
            <v-col class="text-center">
              <p>69.037.133/0001-39</p>
            </v-col>
            <v-col class="text-center">
              <p>Bracel</p>
            </v-col>
            <v-col class="text-center">
              <p class="text-marromPrincipal font-weight-bold"><span class="text-marromPrincipal font-weight-bold bg-marromSecundario py-1 px-2 rounded-xl">Empresárial</span></p>
            </v-col>
            <v-col class="text-center">
              <v-icon>
                mdi-dots-horizontal
              </v-icon>
            </v-col>
          </v-row>
          <v-row class="border-b bg-branco tr-linha">
            <v-col class="text-center">
              <p>000.000.000/0001-91</p>
            </v-col>
            <v-col class="text-center">
              <p>Banco do Brasil</p>
            </v-col>
            <v-col class="text-center">
              <p class="text-marromPrincipal font-weight-bold"><span class="text-marromPrincipal font-weight-bold bg-marromSecundario py-1 px-2 rounded-xl">Premium</span></p>
            </v-col>
            <v-col class="text-center">
              <v-icon>
                mdi-dots-horizontal
              </v-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Modais -->

      <!-- modal verificar disponibilidade -->
      <v-dialog v-model="modalAtivacaoLicenca" max-width="800px">
        <v-container class="bg-branco px-10">
          <v-row class="border-b">
            <v-col class="d-flex justify-start" cols="10">
              <p class="font-weight-bold text-marromPrincipal text-h6 text-md-xl-h5">Ativar Licença Para Empresa</p>
            </v-col>
            <v-col class="d-flex justify-end align-center" cols="2">
              <p class="font-weight-bold text-h6 cursor-pointer modal-fechar" @click="modalAtivacaoLicenca = false">X</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div>
                <p class="font-weight-bold text-subtitle-1">Escrituração Fiscal Digital - EFD</p>
                <div class="d-flex mt-1">
                  <p class="bg-marromPrincipal text-caption mr-2 px-2 rounded-xl">informação 1</p>
                  <p class="bg-marromPrincipal text-caption mr-2 px-2 rounded-xl">informação 2</p>
                  <p class="bg-marromPrincipal text-caption mr-2 px-2 rounded-xl">informação 3</p>
                </div>
              </div>
            </v-col>
          </v-row>

          <v-row class="mt-8">
            <v-col cols="12">
              <v-text-field clearable label="CNPJ" variant="outlined" density="comfortable"></v-text-field>
              <p class="text-caption mt-n5 ml-2">Preencha o CNPJ e consultaremos os dados para você.</p>
            </v-col>
          </v-row>
          
          <v-row wrap>
            <v-col cols="12" md="6">
              <v-text-field clearable label="Razão Social" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field clearable label="Nome Fantasia" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field clearable label="Inscrição Estadual (opcional)" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field clearable label="Inscrição Municipal (opcional)" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field clearable label="Telefone (opcional)" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field clearable label="CEP" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field clearable label="Endereço" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field clearable label="Número" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field clearable label="Complemento (opcional)" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field clearable label="Bairro" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field clearable label="Cidade" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field clearable label="Estado" variant="outlined" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field clearable label="País" variant="outlined" density="comfortable"></v-text-field>
            </v-col>

          </v-row>
          <v-row>
            <v-col class="d-flex justify-end">
              <v-btn class="bg-marromPrincipal mr-2 rounded-xl">Cancelar</v-btn>
              <v-btn class="bg-laranja rounded-xl">Cadastrar</v-btn>
            </v-col>
          </v-row>
        </v-container>
    </v-dialog>

    <!-- modal ativação licença -->
    <v-dialog v-model="modalVerificarDisponibilidade" max-width="800px">
        <v-container class="bg-branco px-10">
          <v-row class="border-b">
            <v-col class="d-flex justify-start" cols="10">
              <p class="font-weight-bold text-marromPrincipal text-h6 text-md-xl-h5">Ativar Licença Para Empresa</p>
            </v-col>
            <v-col class="d-flex justify-end align-center" cols="2">
              <p class="font-weight-bold text-h6 cursor-pointer modal-fechar" @click="modalVerificarDisponibilidade = false">X</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div>
                <p class="font-weight-bold text-subtitle-1">Escrituração Fiscal Digital - EFD</p>
                <div class="d-flex mt-1">
                  <p class="bg-marromPrincipal text-caption mr-2 px-2 rounded-xl">informação 1</p>
                  <p class="bg-marromPrincipal text-caption mr-2 px-2 rounded-xl">informação 2</p>
                  <p class="bg-marromPrincipal text-caption mr-2 px-2 rounded-xl">informação 3</p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row class="mt-10">
            <v-col cols="12">
              <v-text-field clearable label="CNPJ" variant="outlined" density="comfortable"></v-text-field>
              <p class="text-caption mt-n5 ml-2">Preencha o CNPJ e consultaremos os dados para você.</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-end">
              <v-btn class="bg-marromPrincipal rounded-xl" @click="modalAtivacaoLicenca = true">
                Verificar Disponibilidade
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
    </v-dialog>

    <!-- Modal trocar empresa -->
    <v-dialog v-model="modalTrocarEmpresa" max-width="800px">
        <v-container class="bg-branco px-10">
          <v-row>
            <v-col  class="d-flex justify-end" cols="12">
              <p class="text-h6 cursor-pointer modal-fechar" @click="modalTrocarEmpresa = false">X</p>
            </v-col>
          </v-row>
          <v-row class="mt-n2">
            <v-col class="d-flex justify-center" cols="12">
              <p class="text-marromPrincipal font-weight-bold text-h6">Alternar Empresa</p>
            </v-col>
          </v-row>
          <v-rol class="d-flex justify-center mt-5 mb-5 flex-wrap border-b">
            <v-col cols="12" md="4">
              <div class="d-flex flex-column justify-center align-center pa-2">
                <v-icon class="mb-2" color="marromPrincipal">mdi-repeat</v-icon>
                <p>00.000.000/0000-00</p>
                <p>Nome da empresa</p>
              </div>           
            </v-col>
            <v-col cols="12" md="4">
              <div class="d-flex flex-column justify-center align-center pa-2" style="border: 2px solid #fd683e;">
                <v-icon class="mb-2" color="marromPrincipal">mdi-repeat</v-icon>
                <p>00.000.000/0000-00</p>
                <p>Nome da empresa</p>
              </div>           
            </v-col>
            <v-col cols="12" md="4">
              <div class="d-flex flex-column justify-center align-center pa-2">
                <v-icon class="mb-2" color="marromPrincipal">mdi-repeat</v-icon>
                <p>00.000.000/0000-00</p>
                <p>Nome da empresa</p>
              </div>           
            </v-col>
            <v-col cols="12" md="4">
              <div class="d-flex flex-column justify-center align-center pa-2">
                <v-icon class="mb-2" color="marromPrincipal">mdi-repeat</v-icon>
                <p>00.000.000/0000-00</p>
                <p>Nome da empresa</p>
              </div>           
            </v-col>
          </v-rol>
          <v-row>
            <v-col class="d-flex justify-end align-center" cols="12">
              <v-btn class="bg-rosa mr-2 rounded-xl">Cancelar</v-btn>
              <v-btn class="bg-marromPrincipal rounded-xl">Confirmar</v-btn>
            </v-col>
          </v-row>
        </v-container>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'Empresas',

    data(){
      return {
        modalVerificarDisponibilidade: false,
        modalAtivacaoLicenca: false,
        modalTrocarEmpresa: false,

        cardAtivacao: null,       
        testes: ['2020 | Leiaute 8','2020 | Leiaute 9']
      };
      
    },

    methods: {
      definirCardAtivacao(id){
        this.cardAtivacao = null;
        if(this.cardAtivacao === null){
          this.cardAtivacao = id;
        }
      }
    },

    mounted(){
      setTimeout(() => {
        this.$root.isLoading = false;
      },1000)
      
    }
  }
</script>

<style>
  .card-licenca {
    border-left: 4px solid #6A3D31;
    width: 220px;
  }

  .position-relative {
    position: relative;
  }

  .position-absolute {
    position: absolute;
  }

  .modal-fechar:hover {
    opacity: 0.8;
  }

  .shadow {
    box-shadow: 0 10px 30px 0 rgb(24 28 33 / 5%);
  }

  .tr-linha:hover {
    box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.10);
    border-left: 5px solid #6A3D31;
  }
</style>
