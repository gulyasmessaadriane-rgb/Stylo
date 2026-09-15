import React from 'react';
import { theme } from '@styles/theme';
import Card from '@components/Card';
import Button from '@components/Button';

interface Message {
  id: string;
  sender: 'user' | 'ai' | 'family';
  text: string;
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = React.useState<Message[]>([
    { id: '1', sender: 'ai', text: 'Good morning! How are you feeling today?', timestamp: new Date() },
    { id: '2', sender: 'user', text: 'I\'m feeling calm and ready for the day', timestamp: new Date() },
    { id: '3', sender: 'ai', text: 'That\'s wonderful! I\'ve prepared an outfit that matches your calm energy.', timestamp: new Date() },
  ]);
  const [input, setInput] = React.useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), sender: 'user', text: input, timestamp: new Date() }]);
      setInput('');
    }
  };

  return (
    <div style={{ backgroundColor: theme.colors.cream, minHeight: '100vh', padding: theme.spacing.lg, fontFamily: theme.typography.fontFamily.primary, display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h1 style={{ fontSize: theme.typography.fontSize.h2, fontWeight: theme.typography.fontWeight.bold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.lg }}>💬 Chat</h1>

        <div style={{ flex: 1, overflowY: 'auto', marginBottom: theme.spacing.lg, display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
          {messages.map((msg) => (
            <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '70%',
                padding: `${theme.spacing.md} ${theme.spacing.lg}`,
                borderRadius: theme.borderRadius.cards,
                backgroundColor: msg.sender === 'user' ? theme.colors.coral : theme.colors.sand,
                color: msg.sender === 'user' ? theme.colors.white : theme.colors.warmCharcoal,
                fontSize: theme.typography.fontSize.body,
              }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <Card style={{ backgroundColor: theme.colors.peach }}>
          <div style={{ display: 'flex', gap: theme.spacing.md }}>
            <input type="text" placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} style={{ flex: 1, padding: theme.spacing.md, border: 'none', borderRadius: theme.borderRadius.inputs, fontSize: theme.typography.fontSize.body, fontFamily: theme.typography.fontFamily.primary }} />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chat;