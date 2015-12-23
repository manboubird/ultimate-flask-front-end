#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os

from flask import Flask, current_app, render_template, jsonify
from flask.ext.elasticsearch import FlaskElasticsearch

from config import config
from core import es, ElasticsearchService

config_name = os.getenv('FLASK_CONFIG', 'default')

# init flask
app = Flask(__name__)
app.config.from_object(config[config_name])
es.init_app(app)

# setup services
EsService = ElasticsearchService()


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hello')
def hello():
    return render_template('hello.html')


@app.route('/api/reports/')
def get_facet_reports():
    query = render_template('qdsl/search_agg.q')
    current_app.logger.info("query = " + query)
    res = EsService.search(index='weather-report', body=query) 
    return jsonify({ 'data': res })

if __name__ == "__main__":
    app.run(debug=True)
