import { useState, useRef } from 'react';

import { Mic, Pause, Trash, Send } from 'lucide-react';

import { toast } from 'sonner';

import { Button } from '../ui/button';

interface AudioRecorderProps {
  onSendAudio: (audioUrl: string) => void;
  disabled: boolean;
}

export function AudioRecorder({ onSendAudio, disabled }: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast.error('Audio recording is not supported in your browser.');
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/ogg; codecs=opus' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        audioChunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
      toast.error('Failed to start recording. Please check your microphone permissions.');
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const handleSendAudio = () => {
    if (audioURL) {
      onSendAudio(audioURL);
      resetRecorder();
    }
  };

  const handleDeleteAudio = () => {
    resetRecorder();
  };

  const resetRecorder = () => {
    setAudioURL(null);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={isRecording ? stopRecording : startRecording}
        disabled={disabled}
      >
        {isRecording ? <Pause className="text-red-500" /> : <Mic />}
      </Button>

      {audioURL && (
        <div className="absolute left-0 flex items-center justify-end gap-2 w-full py-3 px-4 bg-slate-50 dark:bg-slate-900 rounded-none sm:rounded-b-lg">
          <Button className="text-red-500" variant="ghost" size="icon" onClick={handleDeleteAudio}>
            <Trash />
          </Button>
          <audio
            className="max-w-full"
            controlsList="nodownload noplaybackrate"
            controls
            src={audioURL}
          ></audio>
          <Button variant="ghost" size="icon" onClick={handleSendAudio}>
            <Send />
          </Button>
        </div>
      )}
    </>
  );
}
