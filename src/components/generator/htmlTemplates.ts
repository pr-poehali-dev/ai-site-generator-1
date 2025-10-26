export const generateVariedHTML = (userInput: string, version: number) => {
  const templates = [
    {
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      textColor: 'white',
      buttonBg: 'white',
      buttonColor: '#667eea',
      layout: 'center'
    },
    {
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      textColor: 'white',
      buttonBg: 'rgba(255,255,255,0.9)',
      buttonColor: '#f5576c',
      layout: 'left'
    },
    {
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      textColor: 'white',
      buttonBg: 'white',
      buttonColor: '#00f2fe',
      layout: 'center'
    },
    {
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      textColor: '#1a1a1a',
      buttonBg: '#1a1a1a',
      buttonColor: 'white',
      layout: 'card'
    },
    {
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      textColor: 'white',
      buttonBg: 'rgba(255,255,255,0.95)',
      buttonColor: '#fa709a',
      layout: 'center'
    },
    {
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      textColor: 'white',
      buttonBg: 'white',
      buttonColor: '#330867',
      layout: 'split'
    },
    {
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
      textColor: '#2d2d2d',
      buttonBg: '#2d2d2d',
      buttonColor: 'white',
      layout: 'minimal'
    },
    {
      gradient: 'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)',
      textColor: '#333',
      buttonBg: '#ff6b9d',
      buttonColor: 'white',
      layout: 'card'
    },
    {
      gradient: 'linear-gradient(135deg, #5f72bd 0%, #9b23ea 100%)',
      textColor: 'white',
      buttonBg: 'rgba(255,255,255,0.2)',
      buttonColor: 'white',
      layout: 'center'
    },
    {
      gradient: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
      textColor: 'white',
      buttonBg: 'white',
      buttonColor: '#0ba360',
      layout: 'left'
    }
  ];
  
  const template = templates[version % templates.length];
  
  if (template.layout === 'card') {
    return `
      <div style="background: ${template.gradient}; color: ${template.textColor}; padding: 60px 20px; font-family: 'Arial', sans-serif; min-height: 100%; display: flex; align-items: center; justify-content: center;">
        <div style="background: rgba(255,255,255,0.95); padding: 50px; border-radius: 20px; max-width: 600px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
          <h1 style="font-size: 42px; margin-bottom: 20px; color: #2d2d2d;">Ваш Новый Сайт</h1>
          <p style="font-size: 18px; opacity: 0.8; color: #555; margin-bottom: 30px;">${userInput}</p>
          <button style="background: ${template.buttonBg}; color: ${template.buttonColor}; border: none; padding: 15px 40px; font-size: 18px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Начать</button>
        </div>
      </div>
    `;
  }
  
  if (template.layout === 'left') {
    return `
      <div style="background: ${template.gradient}; color: ${template.textColor}; padding: 60px 20px; font-family: 'Arial', sans-serif; min-height: 100%; display: flex; align-items: center;">
        <div style="max-width: 600px; margin-left: 50px;">
          <h1 style="font-size: 52px; margin-bottom: 20px; font-weight: bold;">Ваш Новый Сайт</h1>
          <p style="font-size: 20px; opacity: 0.9; margin-bottom: 30px; line-height: 1.6;">${userInput}</p>
          <button style="background: ${template.buttonBg}; color: ${template.buttonColor}; border: none; padding: 18px 45px; font-size: 18px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Начать</button>
        </div>
      </div>
    `;
  }
  
  if (template.layout === 'split') {
    return `
      <div style="background: ${template.gradient}; color: ${template.textColor}; font-family: 'Arial', sans-serif; min-height: 100%; display: grid; grid-template-columns: 1fr 1fr;">
        <div style="padding: 60px; display: flex; flex-direction: column; justify-content: center;">
          <h1 style="font-size: 48px; margin-bottom: 20px; font-weight: bold;">Ваш Новый Сайт</h1>
          <p style="font-size: 18px; opacity: 0.9; margin-bottom: 30px; line-height: 1.6;">${userInput}</p>
          <button style="background: ${template.buttonBg}; color: ${template.buttonColor}; border: none; padding: 15px 40px; font-size: 18px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2); width: fit-content;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Начать</button>
        </div>
        <div style="background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center;">
          <div style="font-size: 120px; opacity: 0.3;">🚀</div>
        </div>
      </div>
    `;
  }
  
  if (template.layout === 'minimal') {
    return `
      <div style="background: ${template.gradient}; color: ${template.textColor}; padding: 100px 20px; font-family: 'Arial', sans-serif; min-height: 100%;">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
          <h1 style="font-size: 64px; margin-bottom: 30px; font-weight: 300; letter-spacing: -2px;">Ваш Новый Сайт</h1>
          <p style="font-size: 22px; opacity: 0.85; margin-bottom: 50px; font-weight: 300;">${userInput}</p>
          <button style="background: ${template.buttonBg}; color: ${template.buttonColor}; border: 2px solid ${template.buttonBg}; padding: 18px 50px; font-size: 16px; border-radius: 50px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='transparent'; this.style.color='${template.textColor}';" onmouseout="this.style.background='${template.buttonBg}'; this.style.color='${template.buttonColor}';">Начать</button>
        </div>
      </div>
    `;
  }
  
  return `
    <div style="background: ${template.gradient}; color: ${template.textColor}; padding: 60px 20px; font-family: 'Arial', sans-serif; min-height: 100%;">
      <h1 style="font-size: 48px; margin-bottom: 20px; text-align: center; animation: fadeIn 0.5s;">Ваш Новый Сайт</h1>
      <p style="font-size: 20px; text-align: center; opacity: 0.9; max-width: 600px; margin: 0 auto;">${userInput}</p>
      <div style="margin-top: 40px; text-align: center;">
        <button style="background: ${template.buttonBg}; color: ${template.buttonColor}; border: none; padding: 15px 40px; font-size: 18px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Начать</button>
      </div>
    </div>
  `;
};
