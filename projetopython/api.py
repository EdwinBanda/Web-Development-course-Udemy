import sounddevice as sd
import wavio
import requests

def gravar_audio(nome_arquivo, duracao_segundos):
    print("Iniciando gravação...")
    audio = sd.rec(int(duracao_segundos * 44100), samplerate=44100, channels=1)
    sd.wait()
    print("Gravação concluída!")
    wavio.write(nome_arquivo, audio, 44100, sampwidth=2)

def analisar_audio(nome_arquivo, api_key):
    url = "https://shazam.p.rapidapi.com/songs/detect"

    audio_data = open(nome_arquivo, 'rb').read()
    # print(audio_data, "Conteúdo do arquivo:")

    headers = {
        "content-type": "text/plain",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": "21a015342cmshc461e4923d53872p14e16cjsnef370e92d9b5"
    }

    try:
        response = requests.request("POST",url, data=audio_data, headers=headers)
        response.raise_for_status()
        # print("Resposta da API:", response.text)
        return response.json()
    except requests.exceptions.RequestException as e:
        print("Erro ao fazer a solicitação à API:", e)
        return None

nome_arquivo = "gravacao.raw"
duracao_segundos = 5
api_key = "21a015342cmshc461e4923d53872p14e16cjsnef370e92d9b5"

gravar_audio(nome_arquivo, duracao_segundos)

resultado_analise = analisar_audio(nome_arquivo, api_key)

if resultado_analise is not None:
    print("Resultado da análise:", resultado_analise)
else:
    print("Não foi possível obter uma resposta da API.")

# Razoes possiveis:
# Formato 'wav' nao suportado pela api
# 
