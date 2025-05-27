async function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (!fileInput.files || fileInput.files.length === 0) {
        resultDiv.innerHTML = '<p style="color:red;">Please select an image file.</p>';
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:8000/predict', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Server error');
        }

        const data = await response.json();

        if (!data.class || !data.confidence) {
            throw new Error('Invalid response from server');
        }

        let description = '';
        let recommendation = '';

        if (data.class === 'Early Blight') {
            description = 'Early Blight is a fungal disease characterized by dark brown spots with concentric rings on older leaves.';
            recommendation = 'Recommendation: Remove infected leaves, use fungicides like chlorothalonil, and rotate crops.';
        } else if (data.class === 'Late Blight') {
            description = 'Late Blight is a serious disease causing dark lesions on leaves and stems, potentially leading to crop failure.';
            recommendation = 'Recommendation: Apply fungicides such as copper-based products promptly, and avoid overhead irrigation.';
        }

        let html = `<p class="disease-title">Prediction: ${data.class}</p>`;
        html += `<p class="confidence">Confidence: ${(data.confidence * 100).toFixed(2)}%</p>`;

        if (data.class !== 'Healthy') {
            html += `<p>${description}</p>`;
            html += `<p class="recommendations">${recommendation}</p>`;
        } else {
            html += `<p>Your plant is healthy. No disease detected.</p>`;
        }

        resultDiv.innerHTML = html;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">Error during prediction. Please try again.</p>`;
        console.error('Prediction error:', error);
    }
}
