<script setup>
const cookie = useCookie("cookie_consent", {
  maxAge: 60 * 60 * 24 * 365 * 10,
  sameSite: true,
});
cookie.value = cookie.value || {
  action: false,
  analytics: false,
};

// [BUG] https://github.com/nuxt/nuxt/issues/22001
const allowAll = () => {
  cookie.value = JSON.stringify({
    action: true,
    analytics: true,
  });
  reloadNuxtApp();
};

// [BUG] https://github.com/nuxt/nuxt/issues/22001
const onlyBasics = () => {
  cookie.value = JSON.stringify({
    action: true,
    analytics: false,
  });
  reloadNuxtApp();
};
</script>

<template>
  <Modal :show="!cookie.action">
    <template #title>
      <span class="flex gap-2">
        <IconsCookie class="w-5" />Política de Cookies
      </span>
    </template>
    <div class="text-justify text-xs space-y-2">
      <p>
        Las cookies nos permiten personalizar y mejorar tu experiencia en
        nuestro sitio web, ofreciéndote contenido más relevante y adaptado a tus
        intereses.
      </p>
      <p>
        Sin embargo, es importante que sepas que respetamos tú privacidad y por
        ello, necesitamos tu consentimiento para utilizarlas. Si estás de
        acuerdo, por favor haz clic en "Aceptar". Si no estás de acuerdo, puedes
        continuar navegando sin ellas.
      </p>
      <div class="collapse bg-base-200">
        <input type="radio" />
        <div class="collapse-title font-medium">Mostrar cookies utilizadas</div>
        <div class="collapse-content">
          <ul>
            <li>
              <strong>Google Analytics</strong>
              Herramienta de análisis que nos ayuda a entender cómo los usuarios
              interactúan con nuestro sitio web. Estas cookies recopilan datos
              anónimos y nos proporcionan información valiosa sobre el
              rendimiento y uso de nuestro sitio, permitiéndonos tomar
              decisiones informadas para mejorar tu experiencia.
            </li>
          </ul>
          <table class="table table-sm">
            <tbody>
              <tr>
                <th>Nombre de la cookie</th>
                <th>Duración</th>
                <th>Descripción</th>
              </tr>
              <tr>
                <td>
                  <code>_<wbr />ga</code>
                </td>
                <td>2 años</td>
                <td>Se usa para distinguir a los usuarios.</td>
              </tr>
              <tr>
                <td>
                  <code>_<wbr />gid</code>
                </td>
                <td>24&nbsp;horas</td>
                <td>Se usa para distinguir a los usuarios.</td>
              </tr>
              <tr>
                <td>
                  <code>_<wbr />gat</code>
                </td>
                <td>1&nbsp;minuto</td>
                <td>Se usa para limitar el porcentaje de solicitudes.</td>
              </tr>
              <tr>
                <td>
                  <code>AMP_<wbr />TOKEN</code>
                </td>
                <td>30&nbsp;segundos a 1&nbsp;año</td>
                <td>
                  Incluye un token que se puede utilizar para recuperar un ID de
                  cliente del servicio de ID de cliente de AMP. Otros posibles
                  valores indican inhabilitaciones, solicitudes en curso o
                  errores obtenidos al recuperar un ID del servicio de ID de
                  cliente de AMP.
                </td>
              </tr>
              <tr>
                <td>
                  <code>_<wbr />gac_<wbr />&lt;property-id&gt;</code>
                </td>
                <td>90&nbsp;días</td>
                <td>
                  Incluye información de la campaña relativa al usuario. Si has
                  vinculado tus cuentas de Google Analytics y AdWords, las
                  etiquetas de conversión de sitios web leerán esta cookie, a
                  menos que la inhabilites.
                  <a href="https://support.google.com/adwords/answer/7521212?hl=es"
                    >Más información</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <template #actions>
      <button type="button" class="btn btn-primary" @click="allowAll">
        Aceptar todo
      </button>
      <button type="button" class="btn btn-ghost" @click="onlyBasics">
        Rechazar
      </button>
    </template>
  </Modal>
</template>
