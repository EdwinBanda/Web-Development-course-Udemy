import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.DataLine;
import javax.sound.sampled.TargetDataLine;

public class App {
    public static void main(String[] args) throws Exception {
        final AudioFormat format = getFormat(); // Preencha o AudioFormat com as configurações desejadas
        DataLine.Info info = new DataLine.Info(TargetDataLine.class, format);
        final TargetDataLine line = (TargetDataLine) AudioSystem.getLine(info);
        line.open(format); // Abre a linha de captura de áudio com as configurações do AudioFormat
        line.start(); // Inicia a captura de áudio

        

        byte[] buffer = new byte[4096]; // Defina o tamanho do buffer de áudio

        OutputStream out = new ByteArrayOutputStream(); // Cria um fluxo de saída em memória para armazenar os dados de áudio capturados
        boolean running = true; // Variável que controla a execução do loop de captura

        try {
            while (running) {
                int count = line.read(buffer, 0, buffer.length); // Lê dados de áudio da linha de captura para o buffer
                if (count > 0) {
                    out.write(buffer, 0, count); // Escreve os dados do buffer no fluxo de saída
                }
            }
            out.close(); // Fecha o fluxo de saída ao terminar a captura
        } catch (IOException e) {
            System.err.println("Problemas de I/O: " + e);
            System.exit(-1);
        }

        
        
    }
    
    
    private static AudioFormat getFormat() {
        float sampleRate = 44100; // Taxa de amostragem (por exemplo, 44.1 kHz)
        int sampleSizeInBits = 16; // Tamanho do sample em bits
        int channels = 1; // 1 para mono, 2 para estéreo
        boolean signed = true; // Sinalizado ou não sinalizado
        boolean bigEndian = false; // Formato big-endian ou little-endian

        return new AudioFormat(sampleRate, sampleSizeInBits, channels, signed, bigEndian);
    }
    
    

    
    

}
