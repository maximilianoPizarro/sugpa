package com.dgcactysv.Test;
//    jcommon-VERSION.jar
//jfreechart-VERSION.jar
import java.awt.BasicStroke;
import java.awt.BorderLayout;
import java.awt.Color;
import java.io.File;
import java.io.IOException;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.ChartUtilities;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.renderer.category.LineAndShapeRenderer;
import org.jfree.chart.renderer.category.LineRenderer3D;
import org.jfree.data.category.CategoryDataset;
import org.jfree.data.category.DefaultCategoryDataset;

/**
 * This program demonstrates how to draw line chart with CategoryDataset
 * using JFreechart library.
 * @author www.codejava.net
 *
 */
public class TestGraficoLineal extends JFrame {

	public TestGraficoLineal() {
		super("Line Chart Example with JFreechart");
		
		JPanel chartPanel = createChartPanel();
		add(chartPanel, BorderLayout.CENTER);
		
		setSize(640, 480);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setLocationRelativeTo(null);
	}
	
	private JPanel createChartPanel() {
		String chartTitle = "Programming Languages Trends";
		String categoryAxisLabel = "Interest over time";
		String valueAxisLabel = "Popularity";
		
		CategoryDataset dataset = createDataset();
		
		JFreeChart chart = ChartFactory.createLineChart(chartTitle, 
				categoryAxisLabel, valueAxisLabel, dataset);
		
//		boolean showLegend = false;
//		boolean createURL = false;
//		boolean createTooltip = false;
//		
//		JFreeChart chart = ChartFactory.createLineChart(chartTitle, 
//				categoryAxisLabel, valueAxisLabel, dataset, 
//				PlotOrientation.HORIZONTAL, showLegend, createTooltip, createURL);
		
//		JFreeChart chart = ChartFactory.createLineChart3D(chartTitle, 
//				categoryAxisLabel, valueAxisLabel, dataset);		
		
		customizeChart(chart);
		
		// saves the chart as an image files
		File imageFile = new File("LineChart.png");
		int width = 640;
		int height = 480;
		
		try {
			ChartUtilities.saveChartAsPNG(imageFile, chart, width, height);
		} catch (IOException ex) {
			System.err.println(ex);
		}
		
		return new ChartPanel(chart);
	}

	private CategoryDataset createDataset() {
		DefaultCategoryDataset dataset = new DefaultCategoryDataset();
		String series1 = "Java";
		String series2 = "PHP";
		String series3 = "C++";
		String series4 = "C#";
		
		dataset.addValue(5.0, series1, "2005");
		dataset.addValue(4.8, series1, "2006");
		dataset.addValue(4.5, series1, "2007");
		dataset.addValue(4.3, series1, "2008");
		dataset.addValue(4.0, series1, "2009");
		dataset.addValue(4.1, series1, "2010");
		dataset.addValue(4.2, series1, "2011");
		dataset.addValue(4.2, series1, "2012");
		dataset.addValue(4.0, series1, "2013");
		
		dataset.addValue(4.0, series2, "2005");
		dataset.addValue(4.2, series2, "2006");
		dataset.addValue(3.8, series2, "2007");
		dataset.addValue(3.6, series2, "2008");
		dataset.addValue(3.4, series2, "2009");
		dataset.addValue(3.4, series2, "2010");
		dataset.addValue(3.3, series2, "2011");
		dataset.addValue(3.1, series2, "2012");
		dataset.addValue(3.2, series2, "2013");
		
		dataset.addValue(3.6, series3, "2005");
		dataset.addValue(3.4, series3, "2006");
		dataset.addValue(3.5, series3, "2007");
		dataset.addValue(3.2, series3, "2008");
		dataset.addValue(3.2, series3, "2009");
		dataset.addValue(3.0, series3, "2010");
		dataset.addValue(2.8, series3, "2011");
		dataset.addValue(2.8, series3, "2012");
		dataset.addValue(2.6, series3, "2013");
		
		dataset.addValue(3.2, series4, "2005");
		dataset.addValue(3.2, series4, "2006");
		dataset.addValue(3.0, series4, "2007");
		dataset.addValue(3.0, series4, "2008");
		dataset.addValue(2.8, series4, "2009");
		dataset.addValue(2.7, series4, "2010");
		dataset.addValue(2.6, series4, "2011");
		dataset.addValue(2.6, series4, "2012");
		dataset.addValue(2.4, series4, "2013");
		
		return dataset;
	}
	
	private void customizeChart(JFreeChart chart) {
		CategoryPlot plot = chart.getCategoryPlot();
		LineAndShapeRenderer renderer = new LineAndShapeRenderer();

		// sets paint color for each series
		renderer.setSeriesPaint(0, Color.RED);
		renderer.setSeriesPaint(1, Color.GREEN);
		renderer.setSeriesPaint(2, Color.BLUE);
		renderer.setSeriesPaint(3, Color.YELLOW);

		// sets thickness for series (using strokes)
		renderer.setSeriesStroke(0, new BasicStroke(4.0f));
		renderer.setSeriesStroke(1, new BasicStroke(3.0f));
		renderer.setSeriesStroke(2, new BasicStroke(2.0f));
		renderer.setSeriesStroke(3, new BasicStroke(1.5f));
		
		// sets paint color for plot outlines
		plot.setOutlinePaint(Color.BLUE);
		plot.setOutlineStroke(new BasicStroke(2.0f));
		
		// sets renderer for lines
		plot.setRenderer(renderer);
		
		// sets plot background
		plot.setBackgroundPaint(Color.CYAN);
		
		// sets paint color for the grid lines
		plot.setRangeGridlinesVisible(true);
		plot.setRangeGridlinePaint(Color.BLACK);
		
		plot.setDomainGridlinesVisible(true);
		plot.setDomainGridlinePaint(Color.BLACK);
		
	}
	
	public static void main(String[] args) {
		SwingUtilities.invokeLater(new Runnable() {
			@Override
			public void run() {
				new TestGraficoLineal().setVisible(true);
			}
		});
	}
}