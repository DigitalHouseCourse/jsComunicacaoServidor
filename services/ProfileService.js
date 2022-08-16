
async function requererTodos() {
    let respostaServidor = await fetch('');

    let profiles = await respostaServidor.json();

    return profiles;
}

async function requererPorId(id) {
    let respostaServidor = await fetch(`${URL_BASE}/${id}`);

    let profile = await respostaServidor.json();

    return profile;
}

async function cadastrarUm(newProfile) {
    let configuracoesCabecalho = {
        method: 'POST',
        body: JSON.stringify(newProfile)
    }

    let respostaServidor = await fetch(`${URL_BASE}`, configuracoesCabecalho);

    let profileRegister = await respostaServidor.json();

    return profileRegister;
}

async function deletarUm(id) {
    let configuracoesCabecalho = {
        method: 'DELETE',
        body: JSON.stringify(id)
    }

    let respostaServidor = await fetch(`${URL_BASE}/${id}`, configuracoesCabecalho);

    return (respostaServidor.status == 200);
}

async function atualizarUm(id, newProfile) {
    let configuracoesCabecalho = {
        method: 'PATCH',
        body: JSON.stringify(newProfile)
    }

    let respostaServidor = await fetch(`${URL_BASE}/${id}`, configuracoesCabecalho);

    let profileReload = await respostaServidor.json();

    return profileReload;
}

async function substituirUm(id, newProfile) {
    let configuracoesCabecalho = {
        method: 'PUT',
        body: JSON.stringify(newProfile)
    }

    let respostaServidor = await fetch(`${URL_BASE}/${id}`, configuracoesCabecalho);

    let profileChange = await respostaServidor.json();

    return profileChange;
}